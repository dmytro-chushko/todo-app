export interface ITodo {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface IIsCompleteBody {
  isCompleted: boolean;
}

export interface ISetIsComplete extends IIsCompleteBody {
  id: string;
}
