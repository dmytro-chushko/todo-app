import { Document } from 'mongoose';
import { CustomRequest } from './request.type';

export interface ITodo extends Document {
  title: string;
  description: string;
  isPrivate: boolean;
  isCompleted: boolean;
  userId: string;
}

export interface IResTodo {
  _id: string;
  title: string;
  description: string;
  isPrivate: boolean;
  isCompleted: boolean;
  userId: string;
}

export interface ITodoServices {
  findAll(userId: string): Promise<ITodo[]>;
  findById(id: string, userId: string): Promise<ITodo | null>;
  create(body: ITodo, id: string): Promise<ITodo | null>;
  removeById(id: string, userId: string): Promise<ITodo | null>;
  updateById(id: string, body: ITodo, userId: string): Promise<ITodo | null>;
}

export interface ITodoControllers {
  getAllTodo(req: CustomRequest<ITodo>): Promise<ITodo[]>;
  getTodoById(req: CustomRequest<ITodo>): Promise<ITodo | null>;
  createTodo(req: CustomRequest<ITodo>): Promise<ITodo>;
  updateTodo(req: CustomRequest<ITodo>): Promise<ITodo | null>;
  removeTodo(req: CustomRequest<ITodo>): Promise<ITodo | null>;
}
