import { useQuery } from 'react-query';
import TodoService from '../../services/todo.service';
import { ITodo } from '../../common/types/todo.types';

interface IUseTodoApi {
  isLoading: boolean;
  isError: boolean;
  data?: ITodo[];
  error: unknown;
}

export const useTodoApi = (): IUseTodoApi => {
  const todoService = new TodoService();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getTodos.bind(todoService)
  });

  return {
    isLoading,
    isError,
    data,
    error
  };
};

export default useTodoApi;
