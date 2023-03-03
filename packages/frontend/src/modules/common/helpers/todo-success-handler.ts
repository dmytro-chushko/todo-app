import { toast } from 'react-toastify';
import { queryClient } from '../../react-query/qeury-client';
import { QUERY_KEYS } from '../consts/app-keys.const';

export const todoSuccessHandler = (message: string) => {
  queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
  toast.success(message);
};
