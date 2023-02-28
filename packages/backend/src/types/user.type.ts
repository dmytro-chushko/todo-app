import { Document } from 'mongoose';
import { CustomRequest } from './request.type';

export interface ICreateUser extends Document {
  email: string;
  password: string;
}

export interface IUser extends ICreateUser {
  _id: string;
}

export interface IToken {
  token: string;
}

export interface IJwtPayload {
  email: string;
  userId: string;
}

export interface IUserService {
  findUser(email: string): Promise<IUser | null>;
  createUser(body: ICreateUser): Promise<IUser>;
  loginUser(body: IUser): Promise<IToken>;
}

export interface IUserController {
  registerUser(req: CustomRequest<IUser>): Promise<IUser>;
  loginUser(req: CustomRequest<IUser>): Promise<IToken>;
}
