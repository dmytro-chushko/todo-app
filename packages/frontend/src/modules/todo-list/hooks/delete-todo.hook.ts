import { useMutation } from 'react-query';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import { queryClient } from '../../react-query/qeury-client';
import TodoService from '../../services/todo.service';

interface IUseDeleteTodo {
  handleDelete: () => void;
  isLoading: boolean;
}

export const useDeleteTodo = (id: string): IUseDeleteTodo => {
  const todoService = new TodoService();
  const { mutate, isLoading } = useMutation({
    mutationFn: todoService.deleteTodos.bind(todoService),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
    }
  });

  const handleDelete = () => {
    mutate(id);
  };

  return {
    handleDelete,
    isLoading
  };
};
