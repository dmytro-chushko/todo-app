import { Router } from 'express';
import { isExistMiddleware, tryCathMiddleware, validationMiddleware } from '../../middlewares';
import todoController from '../../controllers/todo.controller';
import { ITodo } from '../../types/todos.type';
import Todo from '../../models/Todo';
import { createTodoSchema, updateTodoSchema } from '../../validation/todo.schemas';

const todosRouter: Router = Router();

todosRouter.get('', tryCathMiddleware(todoController.getAllTodo.bind(todoController)));

todosRouter.get(
  '/:id',
  isExistMiddleware<ITodo>(Todo),
  tryCathMiddleware(todoController.getTodoById.bind(todoController))
);

todosRouter.post(
  '',
  validationMiddleware(createTodoSchema),
  tryCathMiddleware(todoController.createTodo.bind(todoController))
);

todosRouter.put(
  '/:id',
  validationMiddleware(updateTodoSchema),
  isExistMiddleware<ITodo>(Todo),
  tryCathMiddleware(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
  '/:id',
  isExistMiddleware<ITodo>(Todo),
  tryCathMiddleware(todoController.removeTodo.bind(todoController))
);

export default todosRouter;
