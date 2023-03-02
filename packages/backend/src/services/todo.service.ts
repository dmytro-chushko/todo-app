import createError from 'http-errors';
import Todo from '../models/Todo';
import { ITodo, ITodoServices } from '../types/todos.type';

export default class TodoService implements ITodoServices {
  private isAccess(isPrivate: boolean, todoId: string, userId: string): boolean {
    if (isPrivate && String(todoId) !== String(userId)) {
      throw new createError.Forbidden('Not owner');
    }

    return true;
  }

  async findAll(userId?: string): Promise<ITodo[]> {
    const todos = await Todo.find()
      .or([{ isPrivate: false }, { isPrivate: true, userId }])
      .sort({ date: 'desc' });

    return todos;
  }

  async findById(id: string, userId?: string): Promise<ITodo | null> {
    const todo = await Todo.findOne({ _id: id });

    if (todo && userId) this.isAccess(todo.isPrivate, todo.userId, userId);

    return todo;
  }

  async create(body: ITodo, userId?: string): Promise<ITodo> {
    const createdTodo = await Todo.create({ ...body, userId });

    return createdTodo;
  }

  async removeById(id: string, userId?: string): Promise<ITodo | null> {
    const todo = await Todo.findOne({ _id: id });

    if (todo && userId) this.isAccess(todo.isPrivate, todo.userId, userId);

    const removedTodo = await Todo.findOneAndDelete({ _id: id, userId });

    return removedTodo;
  }

  async updateById(id: string, body: ITodo, userId?: string): Promise<ITodo | null> {
    const todo = await Todo.findOne({ _id: id });

    if (todo && userId) this.isAccess(todo.isPrivate, todo.userId, userId);

    const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, body, { new: true });

    return updatedTodo;
  }
}
