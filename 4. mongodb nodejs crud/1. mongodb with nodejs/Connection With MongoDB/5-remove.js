
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";

// Connect to the db
MongoClient.connect(url, function(err, db) {
  if(err) { return console.dir(err); }

	var collection = db.collection('test');
	
	var crit1 = {"hello": "doc1"};
    var crit2 = {"hello": "doc2"};
  
	// collection.remove(crit1);	
    // collection.remove(crit2, {w:1}, function(err, result) {
		// if(err){return console.log(err);}	  
	  
	  // console.log("Records Modified:" + result.result.n);		
	// });

    collection.remove();  
});



