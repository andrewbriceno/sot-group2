import * as admin from '../controllers/adminController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const adminRouter = express.Router();

//product routes
adminRouter.post('/add_product', admin.addProduct);
adminRouter.put('/update_product/:name', admin.updateProduct);
adminRouter.get('/get_product/:name', admin.getProduct);
adminRouter.get('/get_product', admin.getProductList);
adminRouter.delete('/delete_product/:name', admin.deleteProduct);

//recipe routes
adminRouter.post('/add_recipe', admin.addRecipe);
adminRouter.put('/update_recipe/:name', admin.updateRecipe);
adminRouter.get('/get_recipe/:name', admin.getRecipe);
adminRouter.get('/get_recipe', admin.getRecipeList);
adminRouter.delete('/delete_recipe/:name', admin.deleteRecipe);

//glossary routes
adminRouter.post('/add_glossary', admin.addGlossary);
adminRouter.put('/update_glossary/:title', admin.updateGlossary);
adminRouter.get('/get_glossary/:title', admin.getGlossary);
adminRouter.get('/get_glossary', admin.getGlossaryList);
adminRouter.delete('/delete_glossary/:title', admin.deleteGlossary);

//user routes
adminRouter.post('/add_user', admin.addUser);
adminRouter.put('/update_user/:username', admin.updateUser);
adminRouter.get('/get_user/:username', admin.getUser);
adminRouter.get('/get_user', admin.getUserList);
adminRouter.delete('/delete_user/:username', admin.deleteUser);

export default adminRouter;
