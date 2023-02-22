import Todo from '../models/Todo';
import { ITodo, ITodoServices } from '../types/todos.type';

export default class TodoService implements ITodoServices {
  async findAll(): Promise<ITodo[]> {
    const result = await Todo.find();

    return result;
  }

  async findById(id: string): Promise<ITodo | null> {
    const result = await Todo.findById(id);

    return result;
  }

  async create(body: ITodo): Promise<ITodo> {
    const createdTodo = await Todo.create(body);

    return createdTodo;
  }

  async removeById(id: string): Promise<ITodo | null> {
    const removedTodo = await Todo.findByIdAndDelete({ _id: id });

    return removedTodo;
  }

  async updateById(id: string, body: ITodo): Promise<ITodo | null> {
    const updatedTodo = await Todo.findByIdAndUpdate(id, body);

    return updatedTodo;
  }
}
