import AuthController from './auth.controller.js';
import AuthService from './auth.service.js';
import AuthRouter from './auth.router.js';
import UserService from '../user/user.service.js';

const userService = new UserService();
const authService = new AuthService();
const authController = new AuthController(authService, userService);
const authRouter = new AuthRouter(authController);

export default {
  router: authRouter.router,
};
