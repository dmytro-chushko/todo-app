import { Router } from 'express';
import { INewPass, IUser } from '../../types/user.type';
import { passSchema, userSchema } from '../../validation/user.schema';
import { USER } from '../../constants';
import userController from '../../controllers/user.controller';
import { tryCatchMiddleware, validationMiddleware } from '../../middlewares';

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post(
  USER.ROUTE.SIGNUP,
  validationMiddleware<IUser>(userSchema),
  tryCatchMiddleware(userController.registerUser.bind(userController))
);

router.post(
  USER.ROUTE.LOGIN,
  validationMiddleware<IUser>(userSchema),
  tryCatchMiddleware(userController.loginUser.bind(userController))
);

router.patch(
  USER.ROUTE.CHANGE_PASS,
  validationMiddleware<INewPass>(passSchema),
  tryCatchMiddleware(userController.changePassword.bind(userController))
);

export default router;
