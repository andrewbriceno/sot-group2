import * as users from '../controllers/usersController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
import validateToken from '../utils/auth.js';
const usersRouter = express.Router();

//logon routes
usersRouter.post('/signup', users.signup);
usersRouter.post('/signin', users.signin);

// //product routes
// usersRouter.route('/get_product/:name').get(validateToken, users.getProduct);
// usersRouter.route('/get_product').get(users.getProductList);
//
// //recipe routes
// usersRouter.route('/get_recipe/:name').get(validateToken, users.getRecipe);
// usersRouter.route('/get_recipe').get(validateToken, users.getRecipeList);
//
// //glossary routes
// usersRouter.route('/get_glossary/:title').get(validateToken, users.getGlossary);
// usersRouter.route('/get_glossary').get(validateToken, users.getGlossaryList);

//product routes
usersRouter.route('/get_product/:name').get(users.getProduct);
usersRouter.route('/get_product').get(users.getProductList);

//recipe routes
usersRouter.route('/get_recipe/:name').get(users.getRecipe);
usersRouter.route('/get_recipe').get(users.getRecipeList);

//glossary routes
usersRouter.route('/get_glossary/:title').get(users.getGlossary);
usersRouter.route('/get_glossary').get(users.getGlossaryList);

export default usersRouter;
