import * as users from '../controllers/usersController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const usersRouter = express.Router();
/*
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.

  Note: the listings variable above and the file it is connected to help you trace
 */
usersRouter.get('/signup', users.signup);
