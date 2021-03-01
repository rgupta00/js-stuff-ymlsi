
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";

// Connect to the db
MongoClient.connect(url, function(err, db) {
  if(err) { return console.dir(err); }

	var collection = db.collection('teachers');
	
	collection.find().toArray(function(err, items) {
		if(err){return console.log(err);}
		
		console.log(items);
	});
});



