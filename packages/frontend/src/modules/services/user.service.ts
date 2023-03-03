import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { IGetUser, IPass, IToken, IUserAuth } from '../common/types';
import HttpService from './http.service';

class UserService extends HttpService {
  getUser(): Promise<IGetUser> {
    return this.get<IGetUser>(QUERY_KEYS.USER_CURRENT, true);
  }

  signup(body: IUserAuth): Promise<string> {
    return this.add<string, IUserAuth>(QUERY_KEYS.USER_SIGNUP, body);
  }

  login(body: IUserAuth): Promise<IToken> {
    return this.add<IToken, IUserAuth>(QUERY_KEYS.USER_LOGIN, body);
  }

  changePassword(body: IPass): Promise<string> {
    return this.put<string, IPass>(QUERY_KEYS.CHANGE_PASS, body, true);
  }
}

export default UserService;
