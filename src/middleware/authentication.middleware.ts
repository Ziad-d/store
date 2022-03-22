import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Error from '../interfaces/error.interface';
import config from '../config';

const handleUnauthorizedError = (next: NextFunction) => {
  const error: Error = new Error('Login Error, Please login again');
  error.status = 401;
  next(error);
};

const validateTokenMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    // get authHeader
    const authHeader = req.get('Authorization');
    // get authHeader
    if (authHeader) {
      // get value of token
      const bearer = authHeader.split(' ')[0].toLowerCase();
      const token = authHeader.split(' ')[1];
      // check if it bearer token or not
      if (token && bearer === 'bearer') {
        // verify token -- decode based on tokenSecret
        const decode = jwt.verify(
          token,
          config.tokenSecret as unknown as string
        );
        // next()
        if (decode) {
          next();
          // failed to authenticate user
        } else {
          // Failed to authenticate user.
          handleUnauthorizedError(next);
        }
      } else {
        // token type not bearer
        handleUnauthorizedError(next);
      }
    } else {
      // No Token Provided.
      handleUnauthorizedError(next);
    }
  } catch (err) {
    handleUnauthorizedError(next);
  }
};

export default validateTokenMiddleware;
