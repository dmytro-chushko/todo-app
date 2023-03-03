import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../consts/app-keys.const';
import TodoService from '../../services/todo.service';
import { ITodo } from '../types/todo.types';
import { errorHandler } from '../helpers/error-hendler';

interface IUseGetTodoById {
  isLoading: boolean;
  data?: ITodo;
}

export const useGetTodoById = (id: string): IUseGetTodoById => {
  const todoService = new TodoService();
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.TODO, id],
    queryFn: () => todoService.getTodoById(id),
    onError: errorHandler
  });

  return {
    isLoading,
    data
  };
};
