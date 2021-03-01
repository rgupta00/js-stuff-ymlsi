
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";

// Connect to the db
MongoClient.connect(url, function(err, db) {
  if(err) { return console.dir(err); }

	var collection = db.collection('teachers');
	var whCrit = {}; //all
	//1 is to include, 0 is to exclude
	var selCols ={name:1,_id:0};
	collection.find(whCrit,selCols)
			  .sort( { name: 1 } )
			 .toArray(function(err, items) {
		if(err){return console.log(err);}
		
		console.log(items);
	});	
});



