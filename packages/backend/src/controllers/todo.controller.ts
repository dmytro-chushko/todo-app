import TodoService from '../services/todo.service';
import { ITodo, ITodoControllers } from '../types/todos.type';
import { CustomRequest } from '../types/request.type';

export class TodoController implements ITodoControllers {
  constructor(private todoService: TodoService) {}

  async getAllTodo(): Promise<ITodo[]> {
    const todos = await this.todoService.findAll();

    return todos;
  }

  async getTodoById(req: CustomRequest<ITodo>): Promise<ITodo | null> {
    const todo = await this.todoService.findById(req.params.id);

    return todo;
  }

  async createTodo(req: CustomRequest<ITodo>): Promise<ITodo> {
    const createdTodo = await this.todoService.create(req.body);

    return createdTodo;
  }

  async updateTodo(req: CustomRequest<ITodo>): Promise<ITodo | null> {
    const updatedTodo = await this.todoService.updateById(req.params.id, req.body);

    return updatedTodo;
  }

  async removeTodo(req: CustomRequest<ITodo>): Promise<ITodo | null> {
    const deletedTodo = await this.todoService.removeById(req.params.id);

    return deletedTodo;
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
