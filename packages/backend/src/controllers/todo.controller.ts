import { Response, Request } from 'express';
import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(_: Request, res: Response) {
    const todos = await this.todoService.findAll();

    res.json({
      status: 'success',
      code: 200,
      data: { result: todos }
    });
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
