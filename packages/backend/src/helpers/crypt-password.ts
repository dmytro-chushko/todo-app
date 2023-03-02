import bcrypt from 'bcryptjs';
import { USER } from '../constants';

export const cryptPass = (password: string): string => {
  const salt = bcrypt.genSaltSync(USER.CRYPT.SALT);
  const cryptedPassword = bcrypt.hashSync(password, salt);

  return cryptedPassword;
};
