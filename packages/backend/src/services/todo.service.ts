import Todo from '../models/Todo';
import { ITodo, ITodoServices } from '../types/todos.type';

export default class TodoService implements ITodoServices {
  async findAll(userId?: string): Promise<ITodo[]> {
    const todos = await Todo.find({ userId });

    return todos;
  }

  async findById(id: string, userId?: string): Promise<ITodo | null> {
    const todo = await Todo.findOne({ _id: id, userId });

    return todo;
  }

  async create(body: ITodo, userId?: string): Promise<ITodo> {
    const createdTodo = await Todo.create({ ...body, userId });

    return createdTodo;
  }

  async removeById(id: string): Promise<ITodo | null> {
    const removedTodo = await Todo.findByIdAndDelete({ _id: id });

    return removedTodo;
  }

  async updateById(id: string, body: ITodo, userId?: string): Promise<ITodo | null> {
    const updatedTodo = await Todo.findOneAndUpdate({ _id: id, userId }, body, { new: true });

    return updatedTodo;
  }
}
