import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { QUERY_KEYS } from '../consts/app-keys.const';
import { queryClient } from '../../react-query/qeury-client';
import { errorHandler } from '../helpers/error-hendler';
import { IPassForm } from '../types';
import UserService from '../../services/user.service';

interface IUseChangePass {
  handleSubmit: (data: IPassForm) => void;
  isLoading: boolean;
}

export const useChangePass = (): IUseChangePass => {
  const userService = new UserService();
  const { mutate, isLoading } = useMutation({
    mutationFn: userService.changePassword.bind(userService),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
      toast.success('Your password has been changes');
    },
    onError: errorHandler
  });

  const handleSubmit = (data: IPassForm) => {
    mutate({ password: data.newPassword });
  };

  return {
    handleSubmit,
    isLoading
  };
};
