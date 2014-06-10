var express = require("express"),
    bodyParser = require("body-parser") ,
    DbMgr = require("./db").DbMgr;

var app = express(),
    db = new DbMgr();

app.use(bodyParser());

app.get("/", function(req, res){
  res.sendfile("index.html");
});

app.get("/user", function(req, res){
  var age = req.query.age;
  agex = parseInt(age);

  db.findUser({ age: agex}, function(err, docs){
    res.json(docs);
  });
});

app.post("/user", function(req, res){
  var user = req.body;

  db.saveUser(user, function(err, doc){

    if(err) {
      res.statusCode = 400;
      res.end();
    }
    else {
      res.json(doc);
    }

  });
});

app.listen(8088);
