import * as yup from 'yup';
import { IAddTodo } from '../../types/todo.types';

export const addTodoSchema: yup.ObjectSchema<IAddTodo> = yup.object({
  title: yup.string().required('title is required'),
  description: yup.string().required('description is required'),
  isPrivate: yup.boolean()
});
