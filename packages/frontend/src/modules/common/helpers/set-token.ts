import { useHistory } from 'react-router-dom';
import { ROUTER_KEYS, TOKEN_STORAGE } from '../consts/app-keys.const';
import { IToken } from '../types';

export const useSetToken = (): ((data: IToken) => void) => {
  const history = useHistory();
  const successHandler = (data: IToken) => {
    localStorage.setItem(TOKEN_STORAGE, data.token);
    history.push(ROUTER_KEYS.TODO);
  };

  return successHandler;
};
