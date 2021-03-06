var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');
app.use(cors());

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb+srv://mernstack:anjan12345@cluster0.euzyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

// Required application specific custom router module
var itemRouter = require('./src/routes/itemRoutes');

// Use middlewares to set view engine and post json data to the server

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});