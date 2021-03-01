
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";
// Connect to the db
MongoClient.connect(url, function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('test');
  
  var doc1 = {'hello':'doc1'};
  var doc2 = {'hello':'doc2'};
  var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

  collection.insert(doc1);
  //{w:1} is to reterive the last error status
  collection.insert(doc2, {w:1}, function(err, result) {});
  collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
});

