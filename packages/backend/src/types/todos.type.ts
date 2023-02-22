import { Request, Response } from 'express';
import { Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description: string;
  isPrivate: boolean;
  isCompleted: boolean;
}

export interface ITodoServices {
  findAll(): Promise<ITodo[]>;
  findById(id: string): Promise<ITodo | null>;
  create(body: ITodo): Promise<ITodo | null>;
  removeById(id: string): Promise<ITodo | null>;
  updateById(id: string, body: ITodo): Promise<ITodo | null>;
}

export interface ITodoControllers {
  getAllTodo(_: Request, res: Response): Promise<void>;
  getTodoById(req: Request, res: Response): Promise<void>;
}
