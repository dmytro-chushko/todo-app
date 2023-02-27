import { Document } from 'mongoose';
import { CustomRequest } from './request.type';

export interface IUser extends Document {
  email: string;
  password: string;
}

export interface IUserService {
  findUser(email: string): Promise<IUser | null>;
  createUser(body: IUser): Promise<IUser>;
}

export interface IUserController {
  registerUser(req: CustomRequest<IUser>): Promise<IUser>;
}
