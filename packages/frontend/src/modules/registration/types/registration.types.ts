export interface IUserFormValues {
  email: string;
  password: string;
  confPass?: string;
}

export enum UserFormPurpose {
  REGISTER = 'register',
  LOGIN = 'login'
}
