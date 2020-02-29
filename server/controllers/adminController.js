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

export const updateGlossary = async (req, res) => {
  initMongoose()
  const title = req.params.title;
  Glossary.findOneAndUpdate({title: title}, req.body, {new: true}, (err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if(!data) {
      res.status(400).json({
        message: 'Glossary does not exist!',
      });
    } else {
      res.status(200).json(data)
    }
  });
};

export const getGlossary = async (req, res) => {
  initMongoose()
  const title = req.params.title;
  Glossary.findOne({title: title}, (err, data) => {
    if(!data) {
      res.status(400).json({
        message: 'Glossary does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
  /*if(!glossary) {
    return res.status(400).json({
      message: 'Glossary does not exist!',
      id_given: id
    });
  } else {
    return res.status(200).json(glossary);
  }*/
};

export const getGlossaryList = async (req, res) => {
  initMongoose()
  Glossary.find({}, (err, data) => {
    res.status(200).json(data);
  });
};

export const deleteGlossary = async (req, res) => {
  initMongoose()
  const title = req.params.title;
  Glossary.findOneAndDelete({title: title}, (err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if(!data) {
      res.status(400).json({
        message: 'Glossary does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const deleteUser = async (req, res) => {
  const email = req.body.email
  User.findOneAndRemove({email: email}, function(err, result) {
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
