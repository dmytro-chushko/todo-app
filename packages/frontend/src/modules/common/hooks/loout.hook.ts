import { useHistory } from 'react-router-dom';
import { ROUTER_KEYS, TOKEN_STORAGE } from '../consts/app-keys.const';

export const useLogout = (): (() => void) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem(TOKEN_STORAGE);
    history.push(ROUTER_KEYS.LOGIN);
  };

  return logout;
};
