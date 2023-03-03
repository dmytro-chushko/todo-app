import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { IAddTodo, IEditTodoParams, IPaginatedTodos, ITodo } from '../common/types/todo.types';
import HttpService from './http.service';

class TodoService extends HttpService {
  getTodos(query: string) {
    return this.get<IPaginatedTodos>(`${QUERY_KEYS.TODO}?${query}`, true);
  }

  getTodoById(id: string) {
    return this.get<ITodo>(`${QUERY_KEYS.TODO}/${id}`, true);
  }

  addTodo(body: IAddTodo): Promise<ITodo> {
    return this.add<ITodo, IAddTodo>(QUERY_KEYS.TODO, body, true);
  }

  editTodo({ id, ...body }: IEditTodoParams): Promise<ITodo> {
    return this.put<ITodo, Omit<IEditTodoParams, 'id'>>(`${QUERY_KEYS.TODO}/${id}`, body, true);
  }

  deleteTodos(id: string): Promise<ITodo> {
    return this.delete<ITodo>(`${QUERY_KEYS.TODO}/${id}`, true);
  }
}

export default TodoService;
