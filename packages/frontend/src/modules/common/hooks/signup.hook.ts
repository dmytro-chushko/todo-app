import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import UserService from '../../services/user.service';
import { IUserFormValues } from '../components/user-form/types';

interface IUseSignUp {
  handleSubmit: (data: IUserFormValues) => void;
  isLoading: boolean;
}

export const useSignup = (): IUseSignUp => {
  const userService = new UserService();
  const { mutate, isLoading } = useMutation({
    mutationFn: userService.signup.bind(userService),
    onSuccess: (data: string) => {
      toast.success(`${data}. Now you can login`);
    }
  });

  const handleSubmit = (data: IUserFormValues) => {
    mutate({ email: data.email, password: data.password });
  };

  return {
    handleSubmit,
    isLoading
  };
};
