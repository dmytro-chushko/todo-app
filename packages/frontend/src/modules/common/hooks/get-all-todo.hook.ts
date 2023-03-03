import { useQuery } from 'react-query';
import TodoService from '../../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';
import { IPaginatedTodos } from '../types/todo.types';
import { QUERY_KEYS } from '../consts/app-keys.const';
import { IFilter } from '../../todo-list/types/todo-list.types';

interface IUseGetTodo {
  isLoading: boolean;
  data?: IPaginatedTodos;
}

export const useGetTodo = (filter: IFilter, page: number): IUseGetTodo => {
  const todoService = new TodoService();
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.TODO, filter, page],
    queryFn: () =>
      todoService.getTodos(`search=${filter.search}&status=${filter.status}&page=${page}`),
    onError: errorHandler
  });

  return {
    isLoading,
    data
  };
};

export default useGetTodo;
