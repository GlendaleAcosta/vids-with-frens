var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
var PORT = process.env.PORT || 3030;
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

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
app.post('/api/validate-room', roomController.validateRoom);
app.get('/*', function(req,res,next){
    res.sendFile(path.join(__dirname, 'app/public/index.html'));
});

// WebSocket
io.on('connection', function(socket){
  var roomId = socket.handshake.query.roomId;
  socket.join(roomId);
  
  socket.on('chat message', function(chatLine){
    io.to(roomId).emit('chat', chatLine);
  });

  socket.on('video_play', function(time){
    io.to(roomId).emit('video_play', time)
  })

  socket.on('video_paused', function(time){
    io.to(roomId).emit('video_paused', time)
  })

  socket.on('current_video', function(videoId){
    io.to(roomId).emit('current_video', videoId)
  })

  socket.on('disconnect', function(){
    socket.leave(roomId);
  });
});

// Create Server
http.listen( PORT , () => {
    console.log("App is up on port " + PORT);
});