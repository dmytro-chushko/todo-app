import { Router } from 'express';
import { isExistMiddleware, tryCatchMiddleware, validationMiddleware } from '../../middlewares';
import todoController from '../../controllers/todo.controller';
import { ITodo } from '../../types/todos.type';
import Todo from '../../models/Todo';
import { createTodoSchema, updateTodoSchema } from '../../validation/todo.schemas';

const todosRouter: Router = Router();

todosRouter.get('', tryCatchMiddleware(todoController.getAllTodo.bind(todoController)));

todosRouter.get(
  '/:id',
  isExistMiddleware<ITodo>(Todo),
  tryCatchMiddleware(todoController.getTodoById.bind(todoController))
);

todosRouter.post(
  '',
  validationMiddleware<ITodo>(createTodoSchema),
  tryCatchMiddleware(todoController.createTodo.bind(todoController))
);

todosRouter.put(
  '/:id',
  validationMiddleware<ITodo>(updateTodoSchema),
  isExistMiddleware<ITodo>(Todo),
  tryCatchMiddleware(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
  '/:id',
  isExistMiddleware<ITodo>(Todo),
  tryCatchMiddleware(todoController.removeTodo.bind(todoController))
);

export default todosRouter;
