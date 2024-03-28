import express from 'express';

class AuthRouter {
  constructor(authController) {
    this.authController = authController;
  }

  get router() {
    const router = express.Router();
    router.route('/login').post(this.authController.login);
    return router;
  }
}

export default AuthRouter;
