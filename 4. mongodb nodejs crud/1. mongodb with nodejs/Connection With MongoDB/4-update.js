
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/rajdb";
// Connect to the db
MongoClient.connect(url, function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('employees');
  var srcCrit = {empName:"ekta"};
  var change = {$set:{"salary":"40"}};
  
  collection.update(srcCrit, change,function(err, result) {
	  if(err){
		console.log(err);  
	  }	  
	  console.log("Records Modified:" + result.result.nModified);
	if(db)
	 db.close();
  });
});




