import { useQuery } from 'react-query';
import TodoService from '../../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';
import { ITodo } from '../types/todo.types';
import { QUERY_KEYS } from '../consts/app-keys.const';
import { IFilter } from '../../todo-list/types/todo-list.types';

interface IUseGetTodo {
  isLoading: boolean;
  data?: ITodo[];
}

export const useGetTodo = (filter: IFilter): IUseGetTodo => {
  const todoService = new TodoService();
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.TODO],
    queryFn: () => todoService.getTodos(`search=${filter.search}&status=${filter.status}`),
    onError: errorHandler
  });

  return {
    isLoading,
    data
  };
};

export default useGetTodo;
