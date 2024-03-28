import express from 'express';

class UserRouter {
  constructor(userController, authMiddleware) {
    this.userController = userController;
    this.authMiddleware = authMiddleware;
  }

  get router() {
    const router = express.Router();
    router.route('/:id').get(this.userController.getUser);
    router
      .use(this.authMiddleware.authorize)
      .route('/')
      .get(this.userController.getUsers);
    router.route('/').post(this.userController.createUser);
    return router;
  }
}

export default UserRouter;
