import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { ITodo } from '../common/types/todo.types';
import HttpService from './http.service';

class TodoService extends HttpService {
  getTodos() {
    return this.get<ITodo[]>(QUERY_KEYS.TODO);
  }
}

export default TodoService;
