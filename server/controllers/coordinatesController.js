import config from '../config/config.js';
import request from 'request';

export default (req, res, next) => {
    if (req.body.address) {
        // This code replaces all whitespace and commas with the appropriate url-encoded replacement value.
        const addressTemp = req.body.address.toLowerCase().replace(/\s/g, "%20").replace(/,/g, "%2C");
        // Setup your options q and key are provided. Feel free to add others to make the JSON response less verbose and easier to read
        const options = {
            q: addressTemp,
            key: config.openCage.key,
        };

        // The below code makes a GET request to the specified URL.
        request({
            url: 'https://api.opencagedata.com/geocode/v1/json',
            qs: options
        }, async (error, response, body) => {
            if (!error && body) {
              req.results = JSON.parse(body).results[0]
            } else {
                req.results = { geometry: {
                  lat: 0,
                  lng: 0
                }
              }
            }
            next();
        });
    } else {
        next();
    }
};
