var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var DbMgr = require("./db").DbMgr;
var db = new DbMgr();

app.use(bodyParser());
app.get("/", function(req, res){
  res.sendfile("index.html");
});

app.get("/user", function(req, res){

  var agex = req.query.age;
  agex = parseInt(agex);

  db.findUser({ age: agex}, function(err, docs){
    res.json(docs);
  });
});

app.post("/user", function(req, res){
  var user = req.body;

  db.saveUser(user, function(err, doc){

    if(err) {
      console.error(err);
      res.statusCode = 400;
      res.end();
    }
    else {
      res.json(doc);
    }

  });
});

app.listen(8088);
