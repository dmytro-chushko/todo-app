import { useMutation } from 'react-query';
import { ValueName } from '../types/components.types';
import TodoService from '../../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';
import { switchersSuccessHandler } from '../helpers/switchers-success-handler';

interface IUseSetIsComplete {
  handleSwitch: () => void;
  isLoading: boolean;
}

interface IUseSetIsValueParams {
  id: string;
  isValue: boolean;
  valueName: ValueName;
}

export const useSetIsComplete = ({
  id,
  isValue,
  valueName
}: IUseSetIsValueParams): IUseSetIsComplete => {
  const todoService = new TodoService();
  const { mutate, isLoading } = useMutation({
    mutationFn: todoService.editTodo.bind(todoService),
    onSuccess: () => switchersSuccessHandler(valueName, isValue),
    onError: errorHandler
  });

  const handleSwitch = () => {
    if (valueName === ValueName.COMPLETE) mutate({ id, isCompleted: !isValue });
    if (valueName === ValueName.PRIVATE) mutate({ id, isPrivate: !isValue });
  };

  return {
    handleSwitch,
    isLoading
  };
};
