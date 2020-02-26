import * as admin from '../controllers/adminController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const adminRouter = express.Router();

//product routes
adminRouter.post('/addproduct', admin.addProduct);

//glossary routes
adminRouter.post('/addglossary', admin.addGlossary);
adminRouter.get('/getglossary/:glossaryID', admin.getGlossary);

export default adminRouter;
