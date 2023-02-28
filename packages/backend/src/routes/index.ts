import { Application } from 'express';
import passport from 'passport';
import todosRouter from './api/todos.route';
import userRouter from './api/user.route';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/todos', passport.authenticate('jwt', { session: false }), todosRouter);
    this.app.use('/api/user', userRouter);
  }
}

export default AppRouter;
