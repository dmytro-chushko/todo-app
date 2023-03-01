import { useMutation } from 'react-query';
import UserService from '../../services/user.service';
import { IUserFormValues } from '../components/user-form/types';
import { TOKEN_STORAGE } from '../consts/app-keys.const';
import { errorHandler } from '../helpers';
import { IToken } from '../types';

interface IUseLogin {
  handleSubmit: (data: IUserFormValues) => void;
  isLoading: boolean;
}

export const useLogin = (): IUseLogin => {
  const userService = new UserService();
  const { mutate, isLoading } = useMutation({
    mutationFn: userService.login.bind(userService),
    onSuccess: (data: IToken) => {
      localStorage.setItem(TOKEN_STORAGE, data.token);
    },
    onError: errorHandler
  });

  const handleSubmit = (data: IUserFormValues) => {
    mutate({ email: data.email, password: data.password });
  };

  return {
    handleSubmit,
    isLoading
  };
};
