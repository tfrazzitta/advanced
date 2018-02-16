var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var fs = require("fs");
var multer = require("multer");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
mongoose.Promise = Promise;

	if (!process.env.MONGODB_URI){

       mongoose.connect("mongodb://localhost/school");
    }
    else{
        mongoose.connect(process.env.MONGODB_URI)
    }

app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static("./public"));

var db= mongoose.connection;
  
  db.on("error", function(error){
  console.log("Mongoose Error",error)
  });
  db.once("open", function(error){
  console.log("Mongoose Rocks")
  });

require("./routes/bet.js")(app);
// require("./routes/outfits.js")(app);

app.listen(port, function() {
  console.log("App running on port "+ port);
});

