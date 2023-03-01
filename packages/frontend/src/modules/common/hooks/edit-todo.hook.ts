import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { QUERY_KEYS } from '../consts/app-keys.const';
import { queryClient } from '../../react-query/qeury-client';
import TodoService from '../../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';
import { ITodoFormValues } from '../types/todo.types';

interface IUseEditTodoParams {
  id: string;
  handleClose?: () => void;
}

interface IUseEditTodo {
  handleSubmit: (data: ITodoFormValues) => void;
  isLoading: boolean;
}

export const useEditTodo = ({ id, handleClose }: IUseEditTodoParams): IUseEditTodo => {
  const todoService = new TodoService();
  const { mutate, isLoading } = useMutation({
    mutationFn: todoService.editTodo.bind(todoService),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
      toast.success('Task has been updated');
    },
    onError: errorHandler
  });

  const handleSubmit = (data: ITodoFormValues) => {
    mutate({ id, ...data });
    if (handleClose) handleClose();
  };

  return {
    handleSubmit,
    isLoading
  };
};
