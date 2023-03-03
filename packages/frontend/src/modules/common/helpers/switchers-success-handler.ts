import { toast } from 'react-toastify';
import { queryClient } from '../../react-query/qeury-client';
import { QUERY_KEYS } from '../consts/app-keys.const';
import { ValueName } from '../types';

export const switchersSuccessHandler = (valueName: ValueName, isValue: boolean) => {
  queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
  if (valueName === ValueName.COMPLETE) {
    toast.success(`Your task has been ${isValue ? 'started' : 'completed'}`);
  }

  if (valueName === ValueName.PRIVATE) {
    toast.success(`Your task has been switched to ${isValue ? 'Private' : 'Public'}`);
  }
};
