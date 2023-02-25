import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import { queryClient } from '../../react-query/qeury-client';
import TodoService from '../../services/todo.service';
import { errorHandler } from '../helpers/error-hendler';

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
  const { mutate, isLoading, isSuccess, isError, error } = useMutation({
    mutationFn: todoService.setIsComplete.bind(todoService),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
    }
  });

  const handleSwitch = () => {
    mutate({ id, isCompleted: !isCompleted });
  };

  useEffect(() => {
    if (isSuccess) toast.success(`Your task has been ${isCompleted ? 'completed' : 'started'}`);

    if (isError) errorHandler(error);
  }, [isSuccess, isError]);

  return {
    handleSwitch,
    isLoading
  };
};
