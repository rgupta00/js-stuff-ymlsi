
// Retrieve
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:2017/test";

// Connect to the db
MongoClient.connect(url, function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  else {
	 console.log(err); 
  }
});

