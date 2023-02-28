import { Model, model, Schema } from 'mongoose';
import { ITodo } from '../types/todos.type';

const todoSchema: Schema<ITodo> = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required']
    },
    description: {
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
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { versionKey: false, timestamps: true }
);

const Todo: Model<ITodo> = model<ITodo>('Todo', todoSchema);

export default Todo;
