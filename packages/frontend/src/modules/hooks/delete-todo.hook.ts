import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { queryClient } from '../react-query/qeury-client';
import TodoService from '../services/todo.service';
import { errorHandler } from '../todo-list/helpers/error-hendler';

interface IUseDeleteTodo {
  handleDelete: () => void;
  isLoading: boolean;
}

export const useDeleteTodo = (id: string): IUseDeleteTodo => {
  const todoService = new TodoService();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: todoService.deleteTodos.bind(todoService),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
      if (isSuccess) toast.success('Your task has been deleted');
    },
    onError: errorHandler
  });

  const handleDelete = () => {
    mutate(id);
  };

  return {
    handleDelete,
    isLoading
  };
};
