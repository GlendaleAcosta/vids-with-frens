var express = require('express');
var path = require('path');


var PORT = process.env.PORT || 3030;
var app = express();


app.use(express.static('app/src'));
app.use(express.static('app/public'));


app.get('/*', function(req,res,next){
    res.sendFile(path.join(__dirname, 'app/public/index.html'));
});


app.listen( PORT , () => {
    console.log("App is up on port " + PORT);
});