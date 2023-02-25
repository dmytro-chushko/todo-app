import { useMutation } from 'react-query';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import { queryClient } from '../../react-query/qeury-client';
import TodoService from '../../services/todo.service';

interface IUseSetIsComplete {
  handleSwitch: () => void;
  isLoading: boolean;
}

interface IUseSetIsCompleteParams {
  id: string;
  isCompleted: boolean;
}

export const useSetIsComplete = ({
  id,
  isCompleted
}: IUseSetIsCompleteParams): IUseSetIsComplete => {
  const todoService = new TodoService();
  const { mutate, isLoading } = useMutation({
    mutationFn: todoService.setIsComplete.bind(todoService),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
    }
  });

  const handleSwitch = async () => {
    await mutate({ id, isCompleted: !isCompleted });
  };

  return {
    handleSwitch,
    isLoading
  };
};
