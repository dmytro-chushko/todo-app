import bcrypt from 'bcryptjs';

export const isMatch = (customPass: string, cryptedPass: string): boolean => {
  const result = bcrypt.compareSync(customPass, cryptedPass);

  return result;
};
