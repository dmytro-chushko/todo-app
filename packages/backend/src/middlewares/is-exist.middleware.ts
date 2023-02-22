import { Response, Request, NextFunction } from 'express';
import TodoService from '../services/todo.service';

export class IsExist {
  constructor(private todoService: TodoService) {}

  async findTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const todo = await this.todoService.findById(id);

      if (!todo) throw new Error();

      req.todo = todo;

      next();
    } catch (error) {
      return res.status(400).json({ massage: 'Todo not exist' });
    }
  }
}

export const isExist = new IsExist(new TodoService());
