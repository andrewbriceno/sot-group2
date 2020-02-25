import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config.js';
import usersRouter from './routes/usersRouter.js';
import getCoordinates from './controllers/coordinatesController.js';

//connect to database
mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log(`Successfully connected to mongoose database.`)
});

//initialize app
const app = express();

//enable request logging for development debugging
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

/* serve static files - see http://expressjs.com/en/starter/static-files.html */
app.use('/', express.static('./../../client'));
app.use(express.static('client'))

app.use('/api/users/', usersRouter);

app.all('/*', (req, res) => {
    res.sendFile(path.resolve("client/index.html"));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App now listening on port ${PORT}`));
