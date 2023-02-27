import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { ValuName } from '../common/types/components.types';
import { queryClient } from '../react-query/qeury-client';
import TodoService from '../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';

interface IUseSetIsComplete {
  handleSwitch: () => void;
  isLoading: boolean;
}

interface IUseSetIsValueParams {
  id: string;
  isValue: boolean;
  valueName: ValuName;
}

export const useSetIsComplete = ({
  id,
  isValue,
  valueName
}: IUseSetIsValueParams): IUseSetIsComplete => {
  const todoService = new TodoService();
  const { mutate, isLoading } = useMutation({
    mutationFn: todoService.editTodo.bind(todoService),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
      if (valueName === ValuName.COMPLETE) {
        toast.success(`Your task has been ${isValue ? 'completed' : 'started'}`);
      }

      if (valueName === ValuName.PRIVATE) {
        toast.success(`Your task has been switched to ${isValue ? 'Private' : 'Public'}`);
      }
    },
    onError: errorHandler
  });

  const handleSwitch = () => {
    if (valueName === ValuName.COMPLETE) mutate({ id, isCompleted: !isValue });
    if (valueName === ValuName.PRIVATE) mutate({ id, isPrivate: !isValue });
  };

  return {
    handleSwitch,
    isLoading
  };
};
