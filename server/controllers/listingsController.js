/* Dependencies */
import mongoose from 'mongoose';
import Listing from '../models/ListingModel.js';
import coordinates from './coordinatesController.js';
import config from '../config/config.js';

const INFO = {
  status: {
    ok: 200,
    error: 404
  },
  type: {"Content-Type": "application/json"}
}

function repond(err, res, result) {
  if (err) {
    res.writeHead(INFO.status.ok, INFO.type);
    res.end(JSON.stringify({error: 'error'}, null, 2))
  } else if (result == null) {
    res.writeHead(INFO.status.ok, INFO.type);
    res.end(JSON.stringify({error: 'error'}, null, 2))
  } else {
    res.writeHead(INFO.status.ok, INFO.type);
    res.end(JSON.stringify(result))
  }
}

function initMongoose() {
  mongoose.connect(config.db.uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
}

/* Create a listing */
export const create = async (req, res) => {
    let lat = req.results ? req.results.geometry.lat : req.body.coordinates.latitude
    let lng = req.results ? req.results.geometry.lng : req.body.coordinates.longitude
    initMongoose()
    let save_listing
    save_listing = new Listing({
      code: req.body.code,
      name: req.body.name,
      address: req.body.address,
      coordinates: {
        latitude: lat,
        longitude: lng
      }
    });
  save_listing.save(function (err, save_listing) {
    repond(err, res, save_listing);
  });
};

/* Show the current listing */
export const read = (req, res) => {
    initMongoose()
    Listing.findById(req.params.listingId, function(err, result) {
      repond(err, res, result);
   });
};

/* Update a listing - note the order in which this function is called by the router*/
export const update = (req, res) => {
    initMongoose()
    let lat = req.results ? req.results.geometry.lat : req.body.coordinates.latitude
    let lng = req.results ? req.results.geometry.lng : req.body.coordinates.longitude
    Listing.findOneAndUpdate({name: req.body.name}, {$set: {
      address: req.body.address,
      code: req.body.code,
      coordinates: {
        latitude: lat,
        longitude: lng
      }}}, {new: true}, function(err, result) {
        repond(err, res, result);
    });

};

/* Delete a listing */
export const remove = (req, res) => {
    initMongoose()
    Listing.findByIdAndRemove(req.params.listingId, function(err, result) {
      repond(err, res, result);
   });
};

/* Retreive all the directory listings, sorted alphabetically by listing code */
export const list = (req, res) => {
    initMongoose()
    Listing.find({}, function(err, result) {
      repond(err, res, result);
   });
};

/*
  Middleware: find a listing by its ID, then pass it to the next request handler.

  HINT: Find the listing using a mongoose query,
        bind it to the request object as the property 'listing',
        then finally call next
 */
export const listingByID = (req, res, next, id) => {
  console.log("############## IM HERE");
 // next()
};
