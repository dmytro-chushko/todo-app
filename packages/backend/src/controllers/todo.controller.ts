import { Request } from 'express';
import { ITodo, ITodoControllers } from '../types/todos.type';
import TodoService from '../services/todo.service';

export class TodoController implements ITodoControllers {
  constructor(private todoService: TodoService) {}

  async getAllTodo(): Promise<ITodo[]> {
    const todos = await this.todoService.findAll();

    return todos;
  }

  async getTodoById(req: Request): Promise<ITodo> {
    return req.searchResult;
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
