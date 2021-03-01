
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";
// Connect to the db
MongoClient.connect(url, function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('teachers');
  var srcCrit = {id:"3"};
  var change = {$push:{Address:{"City":"Isb"}}};
  
  collection.update(srcCrit, change, {w:1}, function(err, result) {
	  if(err){
		console.log(err);  
	  }	  
	  console.log("Records Modified:" + result.result.nModified);
  });
});



