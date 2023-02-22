import { Router } from 'express';
import { isExist, tryCathWrapper } from '../../middlewares';
import todoController from '../../controllers/todo.controller';

const todosRouter: Router = Router();

todosRouter.get('', tryCathWrapper(todoController.getAllTodo.bind(todoController)));

todosRouter.get(
  '/:id',
  isExist.findTodo.bind(isExist),
  tryCathWrapper(todoController.getTodoById.bind(todoController))
);

export default todosRouter;
