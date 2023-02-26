export interface IAddTodo {
  title: string;
  description: string;
  isPrivate?: boolean;
}

export interface ITodoFormValues extends IAddTodo {
  isCompleted?: boolean;
}

export interface IEditTodoBody extends IAddTodo {
  isCompleted?: boolean;
}

export interface IEditTodoParams extends IEditTodoBody {
  id: string;
}

export interface ITodo {
  _id: string;
  title: string;
  description: string;
  isPrivate: boolean;
  isCompleted: boolean;
}

export interface IIsCompleteBody {
  isCompleted: boolean;
}

export interface ISetIsCompleteParams extends IIsCompleteBody {
  id: string;
}

export enum FormPurpose {
  ADD = 'add',
  EDIT = 'edit'
}
