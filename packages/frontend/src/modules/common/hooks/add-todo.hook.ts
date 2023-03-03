import { useMutation } from 'react-query';
import TodoService from '../../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';
import { IAddTodo } from '../types/todo.types';
import { todoSuccessHandler } from '../helpers/todo-success-handler';

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
    onSuccess: () => todoSuccessHandler('New task has been added'),
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
