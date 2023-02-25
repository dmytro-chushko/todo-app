import { useEffect } from 'react';
import { useQuery } from 'react-query';
import TodoService from '../../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';
import { ITodo } from '../types/todo.types';

interface IUseGetTodo {
  isLoading: boolean;
  data?: ITodo[];
}

export const useGetTodo = (): IUseGetTodo => {
  const todoService = new TodoService();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getTodos.bind(todoService)
  });

  useEffect(() => {
    if (isError) errorHandler(error);
  }, [isError]);

  return {
    isLoading,
    data
  };
};

export default useGetTodo;
