/* Dependencies */
import mongoose from 'mongoose';
import Product from '../models/ProductModel.js';
import Glossary from '../models/GlossaryModel.js';
import User from '../models/UserModel.js';
import config from '../config/config.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

function initMongoose() {
  mongoose.connect(config.db.uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
}

export const addProduct = async (req, res) => {
  initMongoose()
  let save_product
  save_product = new Product({
    name: req.body.name,
    description: req.body.description,
    for_premium: req.body.for_premium,
    published: req.body.published,
  });
  save_product.save(function (err, save_product) {
    console.log('saved =>', save_product);
  });
};

export const addGlossary = async (req, res) => {
  initMongoose()
  let save_glossary
  save_glossary = new Glossary({
    title: req.body.title,
    definition: req.body.definition,
    usage: req.body.usage,
    ingredients: req.body.ingredients,
    is_published: req.body.is_published,
  });
  save_glossary.save(function (err, save_glossary) {
    console.log('saved =>', save_glossary);
    return res.status(200).json({
      glossary: save_glossary
    });
  });
};

export const getGlossary = async (req, res) => {
  initMongoose()
  const title = req.params.title;
  let glossary = await Glossary.find({title: title});
  if(glossary == []) {
    return res.status(400).json({
      message: 'Glossary does not exist!',
      id_given: id
    })
  } else {
    return res.status(200).json(glossary);
  }
}

export const deleteUser = async (req, res) => {
  const email = req.body.email
  User.findByIdAndRemove({email: email}, function(err, result) {
    if (err) {
      console.log("Error deleting", err);
      res.status(404).json({
        err
      });
      throw err;
    }
    res.status(200).json({
      result
    });
  });
}
