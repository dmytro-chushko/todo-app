import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { IToken, IUserAuth } from '../common/types';
import HttpService from './http.service';

class UserService extends HttpService {
  signup(body: IUserAuth): Promise<string> {
    return this.add<string, IUserAuth>(QUERY_KEYS.USER_SIGNUP, body);
  }

  login(body: IUserAuth): Promise<IToken> {
    return this.add<IToken, IUserAuth>(QUERY_KEYS.USER_LOGIN, body);
  }
}

export default UserService;
