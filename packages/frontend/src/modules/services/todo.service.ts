import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { IAddTodo, IIsCompleteBody, ISetIsComplete, ITodo } from '../todo-list/types/todo.types';
import HttpService from './http.service';

class TodoService extends HttpService {
  getTodos() {
    return this.get<ITodo[]>(QUERY_KEYS.TODO);
  }

  addTodo(body: IAddTodo): Promise<ITodo> {
    return this.add<ITodo, IAddTodo>(QUERY_KEYS.TODO, body);
  }

  setIsComplete({ id, ...body }: ISetIsComplete): Promise<ITodo> {
    return this.put<ITodo, IIsCompleteBody>(`${QUERY_KEYS.TODO}/${id}`, { ...body });
  }

  deleteTodos(id: string): Promise<ITodo> {
    return this.delete<ITodo>(`${QUERY_KEYS.TODO}/${id}`);
  }
}

export default TodoService;
