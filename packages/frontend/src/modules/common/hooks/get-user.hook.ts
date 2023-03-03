import { useQuery } from 'react-query';
import UserService from '../../services/user.service';
import { QUERY_KEYS } from '../consts/app-keys.const';
import { errorHandler } from '../helpers';
import { IGetUser } from '../types';

interface IUseGetEser {
  data?: IGetUser;
  isLoading: boolean;
}

export const useGetUser = (): IUseGetEser => {
  const userService = new UserService();
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: userService.getUser.bind(userService),
    onError: errorHandler
  });

  return {
    data,
    isLoading
  };
};
