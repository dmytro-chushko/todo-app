import createError from 'http-errors';
import User from '../models/User';
import { IUser, IUserService } from '../types/user.type';

export default class UserService implements IUserService {
  async findUser(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email });

    return user;
  }

  async createUser(body: IUser): Promise<IUser> {
    const user = await this.findUser(body.email);

    if (user) throw new createError.BadRequest('this email allready exist');

    const newUser = await User.create(body);

    return newUser;
  }
}
