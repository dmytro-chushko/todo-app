import UserService from '../services/user.services';
import { CustomRequest } from '../types/request.type';
import { IUser, IUserController } from '../types/user.type';

export class UserController implements IUserController {
  constructor(private userService: UserService) {}

  async registerUser(req: CustomRequest<IUser>): Promise<IUser> {
    const user = await this.userService.createUser(req.body);

    return user;
  }
}

const userController = new UserController(new UserService());
export default userController;
