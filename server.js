var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
var PORT = process.env.PORT || 3030;
var app = express();

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/vids_with_frens_1");
mongoose.connection.on('error', () => {
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "SESSION_SECRET",
  store: new MongoStore({
    url: "mongodb://localhost:27017/vids_with_frens_1",
    autoReconnect: true
  })
}));
app.use(express.static('app/src'));
app.use(express.static('app/public'));

// Controllers
const roomController = require('./controllers/room');

// Routes
app.post('/api/room', roomController.postRoom);
app.get('/*', function(req,res,next){
    res.sendFile(path.join(__dirname, 'app/public/index.html'));
});

// Create Server
app.listen( PORT , () => {
    console.log("App is up on port " + PORT);
});