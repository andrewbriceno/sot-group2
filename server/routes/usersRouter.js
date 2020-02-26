import * as users from '../controllers/usersController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const usersRouter = express.Router();

usersRouter.post('/signup', users.signup);
usersRouter.post('/signin', users.signin);

export default usersRouter;
