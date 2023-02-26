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

export interface IEditTodoParams {
  id: string;
  title?: string;
  description?: string;
  isPrivate?: boolean;
  isCompleted?: boolean;
}

export interface ITodo {
  _id: string;
  title: string;
  description: string;
  isPrivate: boolean;
  isCompleted: boolean;
}
