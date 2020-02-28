import * as admin from '../controllers/adminController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const adminRouter = express.Router();

//product routes
adminRouter.post('/add_product', admin.addProduct);

//glossary routes
adminRouter.post('/add_glossary', admin.addGlossary);
adminRouter.get('/get_glossary/:title', admin.getGlossary);

//remove user
adminRouter.post('/delete_user', admin.deleteUser);

export default adminRouter;
