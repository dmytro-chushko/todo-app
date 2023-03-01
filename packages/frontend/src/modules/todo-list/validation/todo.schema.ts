import * as yup from 'yup';
import { ITodoFormValues } from '../../common/types/todo.types';

export const todoSchema: yup.ObjectSchema<ITodoFormValues> = yup.object({
  title: yup.string().required('title is required'),
  description: yup.string().required('description is required'),
  isPrivate: yup.boolean(),
  isCompleted: yup.boolean()
});
