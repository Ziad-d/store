import { NextFunction, Request, Response } from 'express';
import config from '../config';
import jwt from 'jsonwebtoken';
import Error from '../interfaces/error.interface';

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
    // check authHeader validate
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
          handleUnauthorizedError(next);
        }
        // token type not bearer
      } else {
        handleUnauthorizedError(next);
      }
      // no token provider
    } else {
      handleUnauthorizedError(next);
    }
  } catch (error) {
    handleUnauthorizedError(next);
  }
};

export default validateTokenMiddleware;
