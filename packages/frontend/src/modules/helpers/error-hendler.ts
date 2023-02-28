import { toast } from 'react-toastify';

export const errorHandler = (error: unknown) => {
  toast.error(`${error instanceof Error && error.message}`);
};
