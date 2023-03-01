import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { IAddTodo, IEditTodoParams, ITodo } from '../common/types/todo.types';
import HttpService from './http.service';

class TodoService extends HttpService {
  getTodos() {
    return this.get<ITodo[]>(QUERY_KEYS.TODO);
  }

  getTodoById(id: string) {
    return this.get<ITodo>(`${QUERY_KEYS.TODO}/${id}`);
  }

  addTodo(body: IAddTodo): Promise<ITodo> {
    return this.add<ITodo, IAddTodo>(QUERY_KEYS.TODO, body);
  }

  editTodo({ id, ...body }: IEditTodoParams): Promise<ITodo> {
    return this.put<ITodo, Omit<IEditTodoParams, 'id'>>(`${QUERY_KEYS.TODO}/${id}`, body);
  }

  deleteTodos(id: string): Promise<ITodo> {
    return this.delete<ITodo>(`${QUERY_KEYS.TODO}/${id}`);
  }
}

export default TodoService;
