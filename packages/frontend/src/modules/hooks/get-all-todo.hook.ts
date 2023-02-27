import { useQuery } from 'react-query';
import TodoService from '../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';
import { ITodo } from '../common/types/todo.types';

interface IUseGetTodo {
  isLoading: boolean;
  data?: ITodo[];
}

export const useGetTodo = (): IUseGetTodo => {
  const todoService = new TodoService();
  const { isLoading, data } = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getTodos.bind(todoService),
    onError: errorHandler
  });

  return {
    isLoading,
    data
  };
};

export default useGetTodo;
