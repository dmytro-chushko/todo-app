import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import TodoService from '../services/todo.service';
import { ITodo } from '../common/types/todo.types';
import { errorHandler } from '../todo-list/helpers/error-hendler';

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
