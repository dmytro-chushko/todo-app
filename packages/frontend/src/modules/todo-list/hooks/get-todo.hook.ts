import { useQuery } from 'react-query';
import TodoService from '../../services/todo.service';
import { ITodo } from '../types/todo.types';

interface IUseGetTodo {
  isLoading: boolean;
  isError: boolean;
  data?: ITodo[];
  error: unknown;
}

export const useGetTodo = (): IUseGetTodo => {
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

export default useGetTodo;
