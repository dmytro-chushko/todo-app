import { useMutation } from 'react-query';
import UserService from '../../services/user.service';
import { IUserFormValues } from '../components/user-form/types';
import { errorHandler } from '../helpers';
import { signupSuccessHandler } from '../helpers/success-handler';

interface IUseSignUp {
  handleSubmit: (data: IUserFormValues) => void;
  isLoading: boolean;
}

export const useSignup = (): IUseSignUp => {
  const userService = new UserService();
  const { mutate, isLoading } = useMutation({
    mutationFn: userService.signup.bind(userService),
    onSuccess: signupSuccessHandler,
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
