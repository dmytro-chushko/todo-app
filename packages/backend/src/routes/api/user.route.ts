import { Router } from 'express';
import { USER } from '../../constants';
import userController from '../../controllers/user.controller';
import { tryCatchMiddleware } from '../../middlewares';

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post(
  USER.ROUTE.SIGNUP,
  tryCatchMiddleware(userController.registerUser.bind(userController))
);

router.post(USER.ROUTE.LOGIN, tryCatchMiddleware(userController.loginUser.bind(userController)));

export default router;
