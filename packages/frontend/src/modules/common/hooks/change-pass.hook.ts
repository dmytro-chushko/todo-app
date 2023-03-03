import { useMutation } from 'react-query';
import { errorHandler } from '../helpers/error-hendler';
import { IPassForm } from '../types';
import UserService from '../../services/user.service';
import { todoSuccessHandler } from '../helpers/todo-success-handler';

interface IUseChangePass {
  handleSubmit: (data: IPassForm) => void;
  isLoading: boolean;
}

export const useChangePass = (): IUseChangePass => {
  const userService = new UserService();
  const { mutate, isLoading } = useMutation({
    mutationFn: userService.changePassword.bind(userService),
    onSuccess: () => todoSuccessHandler('Your password has been changes'),
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
