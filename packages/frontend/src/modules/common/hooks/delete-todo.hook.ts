import { useMutation } from 'react-query';
import TodoService from '../../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';
import { todoSuccessHandler } from '../helpers/todo-success-handler';

interface IUseDeleteTodo {
  handleDelete: () => void;
  isLoading: boolean;
}

export const useDeleteTodo = (id: string): IUseDeleteTodo => {
  const todoService = new TodoService();
  const { mutate, isLoading } = useMutation({
    mutationFn: todoService.deleteTodos.bind(todoService),
    onSuccess: () => todoSuccessHandler('Your task has been deleted'),
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
