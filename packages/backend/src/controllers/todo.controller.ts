import TodoService from '../services/todo.service';
import { ITodo, ITodoControllers } from '../types/todos.type';
import { AuthCustomRequest } from '../types/request.type';

export class TodoController implements ITodoControllers {
  constructor(private todoService: TodoService) {}

  async getAllTodo(req: AuthCustomRequest<ITodo>): Promise<ITodo[]> {
    const { search, status } = req.query;
    const todos = await this.todoService.findAll(req.user._id, search, status);

    return todos;
  }

  async getTodoById(req: AuthCustomRequest<ITodo>): Promise<ITodo | null> {
    const todo = await this.todoService.findById(req.params.id, req.user._id);

    return todo;
  }

  async createTodo(req: AuthCustomRequest<ITodo>): Promise<ITodo> {
    const createdTodo = await this.todoService.create(req.body, req.user._id);

    return createdTodo;
  }

  async updateTodo(req: AuthCustomRequest<ITodo>): Promise<ITodo | null> {
    const updatedTodo = await this.todoService.updateById(req.params.id, req.body, req.user._id);

    return updatedTodo;
  }

  async removeTodo(req: AuthCustomRequest<ITodo>): Promise<ITodo | null> {
    const deletedTodo = await this.todoService.removeById(req.params.id, req.user._id);

    return deletedTodo;
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
