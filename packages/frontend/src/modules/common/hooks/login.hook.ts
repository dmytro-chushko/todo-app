import { useMutation } from 'react-query';
import UserService from '../../services/user.service';
import { IUserFormValues } from '../components/user-form/types';
import { errorHandler } from '../helpers';
import { useSetToken } from './set-token';

interface IUseLogin {
  handleSubmit: (data: IUserFormValues) => void;
  isLoading: boolean;
}

export const useLogin = (): IUseLogin => {
  const successHendler = useSetToken();
  const userService = new UserService();
  const { mutate, isLoading } = useMutation({
    mutationFn: userService.login.bind(userService),
    onSuccess: successHendler,
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
