import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { IUserAuth } from '../common/types';
import HttpService from './http.service';

class UserService extends HttpService {
  signup(body: IUserAuth): Promise<string> {
    return this.add<string, IUserAuth>(QUERY_KEYS.USER_SIGNUP, body);
  }
}

export default UserService;
