// Retrieve
var MongoClient = require('mongodb').MongoClient;
//url
var url = "mongodb://localhost:27017/test";
// Connect to the db
MongoClient.connect(url, function(err, db) {
  		if(err) { 
			return console.dir(err); 
		}

	console.log("hi");
   	db.collection('test11', function(err, collection) {});
   /*db.collection('test2', {strict:true}, function(err, collection) {
	 if(err) {console.log(err);}
   });*/

  /* db.createCollection('test3', function(err, collection) {
	if(err) { 
			console.log("error");
		}
	}
   );   */
/*
  db.createCollection('test5', {strict:true}, function(err, collection) {
	console.log("hi  2");
	 if(err) {console.log(err);}
	console.log("hi 3");
   });*/
});







