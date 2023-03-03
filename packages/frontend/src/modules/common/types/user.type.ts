export interface IUserAuth {
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}

export interface IPass {
  password: string;
}

export interface IPassForm {
  oldPassword: string;
  newPassword: string;
}

export interface IGetUser {
  _id: string;
  email: string;
}
