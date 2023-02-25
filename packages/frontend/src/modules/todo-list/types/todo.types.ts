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

export interface ISetIsComplete extends IIsCompleteBody {
  id: string;
}
