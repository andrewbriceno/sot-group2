import * as users from '../controllers/usersController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const usersRouter = express.Router();

//logon routes
usersRouter.post('/signup', users.signup);
usersRouter.post('/signin', users.signin);

//product routes
usersRouter.get('/get_product/:name', users.getProduct);
usersRouter.get('/get_product', users.getProductList);

//recipe routes
usersRouter.get('/get_recipe/:name', users.getRecipe);
usersRouter.get('/get_recipe', users.getRecipeList);

//glossary routes
usersRouter.get('/get_glossary/:title', users.getGlossary);
usersRouter.get('/get_glossary', users.getGlossaryList);

export default usersRouter;
