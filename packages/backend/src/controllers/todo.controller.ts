import { Response, Request } from 'express';
import { ITodoControllers } from '../types/todos.type';
import TodoService from '../services/todo.service';

export class TodoController implements ITodoControllers {
  constructor(private todoService: TodoService) {}

  async getAllTodo(_: Request, res: Response): Promise<void> {
    const todos = await this.todoService.findAll();

    res.json({
      status: 'success',
      code: 200,
      data: { result: todos }
    });
  }

  async getTodoById(req: Request, res: Response): Promise<void> {
    res.json({
      status: 'success',
      code: 200,
      data: { result: req.todo }
    });
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
