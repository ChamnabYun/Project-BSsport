var express = require ('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection(({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database:'bsports_database',
}));

var server = app.listen(3000, function(){
    var host = server.address().address;
    var host = server.address().port;
});

// con.connect(function(){
//     if(error) console.log(error);
//     else console.log("connected");
// });

app.get('/users',(req, res) => {
    let sql = "SELECT * FROM users";
    let query = con.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });