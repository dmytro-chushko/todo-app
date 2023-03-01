import * as yup from 'yup';
import { IUserFormValues } from '../components/user-form/types';

export const userSchema: yup.ObjectSchema<IUserFormValues> = yup.object({
  email: yup.string().email().required('email is required'),
  password: yup.string().required('password is required'),
  confPass: yup.string().oneOf([yup.ref('password')], 'Passwords should match')
});
