import createError from 'http-errors';
import User from '../models/User';
import { ICreateUser, INewPass, IToken, IUser, IUserService } from '../types/user.type';
import { isMatch, genToken, cryptPass } from '../helpers';

export default class UserService implements IUserService {
  async findUser(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email });

    return user;
  }

  async createUser(body: ICreateUser): Promise<string> {
    const user = await this.findUser(body.email);

    if (user) throw new createError.Conflict('this email allready exist');

    const cryptedPassword = cryptPass(body.password);
    await User.create({
      email: body.email,
      password: cryptedPassword
    });

    return 'User has been created';
  }

  async loginUser(body: ICreateUser): Promise<IToken> {
    const user = await this.findUser(body.email);

    if (!user) throw new createError.NotFound('user is not exist');

    const isPasswordCorrect = isMatch(body.password, user.password);

    if (!isPasswordCorrect) throw new createError.Unauthorized('email or password is not coorect');

    const token = genToken(user);

    return { token };
  }

  async changePassword(body: INewPass, userId?: string): Promise<string> {
    const user = await User.findById(userId);

    if (!user) throw new createError.NotFound('user is not exist');

    const isOldPassword = user && isMatch(body.password, user.password);

    if (isOldPassword) {
      throw new createError.BadRequest('Enter a password different from the old one');
    }

    await User.findByIdAndUpdate(userId, { password: body.password });

    return 'Your password has been changed';
  }
}
