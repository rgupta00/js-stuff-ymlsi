
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";

// Connect to the db
MongoClient.connect(url, function(err, db) {
  if(err) { return console.dir(err); }

	var collection = db.collection('teachers');
	
	var srcCri = {id:{$ne:"1"}};
	
	var stream = collection.find(srcCri).stream();
	stream.on("data", function(item) {
		console.log(item);
	});
	stream.on("end", function() {
		console.log("finished");
	});
});



