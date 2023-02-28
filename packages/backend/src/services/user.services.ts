import createError from 'http-errors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cryptPass } from '../helpers/crypt-password';
import User from '../models/User';
import { ICreateUser, IToken, IUser, IUserService } from '../types/user.type';

export default class UserService implements IUserService {
  async findUser(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email });

    return user;
  }

  async createUser(body: ICreateUser): Promise<IUser> {
    const user = await this.findUser(body.email);

    if (user) throw new createError.Conflict('this email allready exist');

    const cryptedPassword = cryptPass(body.password);
    const newUser = await User.create({
      email: body.email,
      password: cryptedPassword
    });

    return newUser;
  }

  async loginUser(body: ICreateUser): Promise<IToken> {
    const user = await this.findUser(body.email);

    if (!user) throw new createError.NotFound('user not exist');

    const isPasswordCorrect = bcrypt.compareSync(body.password, user.password);

    if (!isPasswordCorrect) throw new createError.Unauthorized('email or password is not coorect');

    const token = jwt.sign(
      {
        email: user.email,
        userId: user.id
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );

    return { token };
  }
}
