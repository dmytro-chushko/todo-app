import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import { queryClient } from '../../react-query/qeury-client';
import TodoService from '../../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';

interface IUseDeleteTodo {
  handleDelete: () => void;
  isLoading: boolean;
}

export const useDeleteTodo = (id: string): IUseDeleteTodo => {
  const todoService = new TodoService();
  const { mutate, isLoading, isSuccess, isError, error } = useMutation({
    mutationFn: todoService.deleteTodos.bind(todoService),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
    }
  });

  const handleDelete = () => {
    mutate(id);
  };

  useEffect(() => {
    if (isSuccess) toast.success('Your task has been deleted');

    if (isError) errorHandler(error);
  }, [isSuccess, isError]);

  return {
    handleDelete,
    isLoading
  };
};
