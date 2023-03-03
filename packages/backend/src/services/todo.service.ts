import createError from 'http-errors';
import { PAGINATION_LIMIT } from 'src/constants/todo.constants';
import Todo from '../models/Todo';
import { IFilterTodos, ITodo, ITodoServices } from '../types/todos.type';

export default class TodoService implements ITodoServices {
  private isAccess(isPrivate: boolean, todoId: string, userId: string): boolean {
    if (isPrivate && String(todoId) !== String(userId)) {
      throw new createError.Forbidden('Not owner');
    }

    return true;
  }

  async findAll(userId: string, search?: string, status?: string, page?: string): Promise<ITodo[]> {
    const skip = (Number(page) - 1) * PAGINATION_LIMIT;
    const filter: IFilterTodos = {};

    if (search) {
      filter.title = { $regex: search, $options: 'i' };
    }

    switch (status) {
      case 'isPrivate':
        filter.isPrivate = true;
        break;

      case 'isPublic':
        filter.isPrivate = false;
        break;

      case 'isCompleted':
        filter.isCompleted = true;
        break;

      default:
        break;
    }

    const todos = await Todo.find(filter, '', {
      skip,
      limit: PAGINATION_LIMIT
    })
      .or([{ isPrivate: false }, { isPrivate: true, userId }])
      .sort({ updateAt: -1, createAt: -1 });

    return todos;
  }

  async findById(id: string, userId: string): Promise<ITodo | null> {
    const todo = await Todo.findOne({ _id: id });

    if (todo && userId) this.isAccess(todo.isPrivate, todo.userId, userId);

    return todo;
  }

  async create(body: ITodo, userId: string): Promise<ITodo> {
    const createdTodo = await Todo.create({ ...body, userId });

    return createdTodo;
  }

  async removeById(id: string, userId: string): Promise<ITodo | null> {
    const todo = await Todo.findOne({ _id: id });

    if (todo && userId) this.isAccess(todo.isPrivate, todo.userId, userId);

    const removedTodo = await Todo.findOneAndDelete({ _id: id, userId });

    return removedTodo;
  }

  async updateById(id: string, body: ITodo, userId: string): Promise<ITodo | null> {
    const todo = await Todo.findOne({ _id: id });

    if (todo && userId) this.isAccess(todo.isPrivate, todo.userId, userId);

    const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, body, { new: true });

    return updatedTodo;
  }
}
