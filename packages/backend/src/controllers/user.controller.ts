import UserService from '../services/user.services';
import { CustomRequest } from '../types/request.type';
import { INewPass, IToken, IUser, IUserController } from '../types/user.type';

export class UserController implements IUserController {
  constructor(private userService: UserService) {}

  async registerUser(req: CustomRequest<IUser>): Promise<string> {
    const message = await this.userService.createUser(req.body);

    return message;
  }

  async loginUser(req: CustomRequest<IUser>): Promise<IToken> {
    const token = await this.userService.loginUser(req.body);

    return token;
  }

  async changePassword(req: CustomRequest<INewPass>): Promise<string> {
    const message = await this.userService.changePassword(req.body, req.user?._id);

    return message;
  }
}

const userController = new UserController(new UserService());
export default userController;
