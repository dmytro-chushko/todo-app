import createError from 'http-errors';
import bcrypt from 'bcryptjs';
import { cryptPass } from '../helpers/crypt-password';
import User from '../models/User';
import { IToken, IUser, IUserService } from '../types/user.type';

export default class UserService implements IUserService {
  async findUser(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email });

    return user;
  }

  async createUser(body: IUser): Promise<IUser> {
    const user = await this.findUser(body.email);

    if (user) throw new createError.Conflict('this email allready exist');

    const cryptedPassword = cryptPass(body.password);
    const newUser = await User.create({
      email: body.email,
      password: cryptedPassword
    });

    return newUser;
  }

  async loginUser(body: IUser): Promise<IToken> {
    const user = await this.findUser(body.email);

    if (!user) throw new createError.NotFound('user not exist');

    const isPasswordCorrect = bcrypt.compareSync(body.password, user.password);

    if (!isPasswordCorrect) throw new createError.Unauthorized('email or password is not coorect');

    const token = '';

    return { token };
  }
}
