import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const errorHandler = (error: unknown) => {
  if (error instanceof AxiosError) {
    toast.error(`${error.response?.data}`);
  }
};
