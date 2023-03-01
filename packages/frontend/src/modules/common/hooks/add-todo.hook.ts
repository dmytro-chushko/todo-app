import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { QUERY_KEYS } from '../consts/app-keys.const';
import { queryClient } from '../../react-query/qeury-client';
import TodoService from '../../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';
import { IAddTodo } from '../types/todo.types';

interface IUseAddTodo {
  handleSubmit: (data: IAddTodo) => void;
  isLoading: boolean;
}

interface IAddTodoParams {
  handleClose?: () => void;
}

export const useAddTodo = ({ handleClose }: IAddTodoParams): IUseAddTodo => {
  const todoService = new TodoService();
  const { mutate, isLoading } = useMutation({
    mutationFn: todoService.addTodo.bind(todoService),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
      toast.success('New task has been added');
    },
    onError: errorHandler
  });

  const handleSubmit = (data: IAddTodo) => {
    mutate(data);
    if (handleClose) handleClose();
  };

  return {
    handleSubmit,
    isLoading
  };
};
