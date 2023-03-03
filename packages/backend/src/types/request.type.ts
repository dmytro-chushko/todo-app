import { Request } from 'express';

export interface CustomRequest<T> extends Request {
  body: T;
  query: {
    search?: string;
    status?: string;
    page?: string;
    limit?: string;
  };
}

export interface AuthCustomRequest<T> extends CustomRequest<T> {
  user: Express.User;
}
