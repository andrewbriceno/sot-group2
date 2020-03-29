import mongoose from 'mongoose';
import User from '../models/UserModel.js';
import config from '../config/config.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_cI3u2JMXdPaFHsjxdHRuleLo005EtmkfsL');

function initMongoose() {
  mongoose.connect(config.db.uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
}

function signJWT(payload, res) {
  jwt.sign(payload, "herbs", { expiresIn: 3600 }, (err, token) => {
      if (err) {
        console.log("JWT error signing", err);
        throw err;
      }
      res.status(200).json({
        token
      });
    }
  );
}

function buildPayload(user) {
  return {
    user: {
      id: user.id,
      "is_premium": user.is_premium,
      "is_admin": user.is_admin,
    }
  }
}

export const charge = async (req, res) => {
  // initMongoose()
  try {
    stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount * 100,
      currency: "usd"
    })
    .then(() => res.send({code: 200}))
    .catch(err => console.log(err));
  } catch (err) {
    res.send(err);
  }
};
