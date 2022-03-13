// that file is for handling middleware error
import { Response, Request, NextFunction } from 'express';
import Error from '../interfaces/error.interface';

// when found a specific error, send the error message to the user with 'something went wrong with the server'.
const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || 'Whoops!! somthing went wrong';
  res.status(status).json({ status, message });
};

export default errorMiddleware;
