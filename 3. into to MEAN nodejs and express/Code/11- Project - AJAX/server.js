var express = require('express');
var bodyParser = require('body-parser');
var mysql      = require('mysql');


var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


 var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'kr_jdbc'
});


app.get('/', function (req, res) {
   res.send('Hello World');
});

app.get('/login.html', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
});

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
  
   var str ="";
   
    connection.query('SELECT * from student', function(err, rows, fields) {
       
      if (!err){
          res.end(JSON.stringify({data:rows}));     
      }
      else
        console.log('Error while performing Query.');
    });

});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
