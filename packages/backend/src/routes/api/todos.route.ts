import { Router } from 'express';
import { isExistMiddleware, tryCathMiddleware } from '../../middlewares';
import todoController from '../../controllers/todo.controller';
import { ITodo } from '../../types/todos.type';
import Todo from '../../models/Todo';

const todosRouter: Router = Router();

todosRouter.get('', tryCathMiddleware(todoController.getAllTodo.bind(todoController)));

todosRouter.get(
  '/:id',
  isExistMiddleware<ITodo>(Todo),
  tryCathMiddleware(todoController.getTodoById.bind(todoController))
);

export default todosRouter;
