import { Model, model, Schema } from 'mongoose';
import { ITodo } from '../types/todos.type';

const todoSchema: Schema<ITodo> = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  descriprtion: {
    type: String,
    required: [true, 'Description is required']
  },
  isPrivate: {
    type: Boolean,
    default: false
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
});

const Todo: Model<ITodo> = model<ITodo>('todo', todoSchema);

export default Todo;
