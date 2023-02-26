export interface IAddTodo {
  title: string;
  description: string;
  isPrivate?: boolean;
}

export interface ITodo extends IAddTodo {
  _id: string;
  isCompleted: boolean;
}

export interface IIsCompleteBody {
  isCompleted: boolean;
}

export interface ISetIsComplete extends IIsCompleteBody {
  id: string;
}
