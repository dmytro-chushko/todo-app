import { Router } from 'express';
import userController from '../../controllers/user.controller';
import { tryCathMiddleware } from '../../middlewares';

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post('/register', tryCathMiddleware(userController.registerUser.bind(userController)));

export default router;
