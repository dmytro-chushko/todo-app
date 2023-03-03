import { useMutation } from 'react-query';
import TodoService from '../../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';
import { ITodoFormValues } from '../types/todo.types';
import { todoSuccessHandler } from '../helpers/todo-success-handler';

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
    onSuccess: () => todoSuccessHandler('Task has been updated'),
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
