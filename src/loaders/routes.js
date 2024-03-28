import authModule from '../components/auth/auth.module.js';
import userModule from '../components/user/user.module.js';

export default (app) => {
  app.use('/users', userModule.router);
  app.use('/auth', authModule.router);
};
