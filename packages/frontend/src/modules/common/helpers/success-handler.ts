import { toast } from 'react-toastify';

export const signupSuccessHandler = (data: string) => {
  toast.success(`${data}. Now you can login`);
};
