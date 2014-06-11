// Import dependiencies.
var express = require("express"),
    bodyParser = require("body-parser") ,
    DbMgr = require("./db").DbMgr;

// Create application instance.
var app = express(),
    db = new DbMgr();

// Apply middleware  .
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// Config application route.
app.get("/", function(req, res){
  res.sendfile("public/index.html");
});

app.get("/user", function(req, res){
  db.findUser({}, function(err, docs){
    res.json(docs);
  });
});

app.post("/user", function(req, res){
  var user = req.body;
  db.saveUser(user, function(err, doc){
    if(err) {
      res.statusCode = 400;
    }
    else {
      res.json(doc);
    }
  });
});

app.get("/user/:id", function(req, res){

  console.log(111111111111);
  function findById(err,doc){
    if(err){
      res.statusCode = 400;
    }else{
      res.json(doc);
    }
  }

  //var id = req.query.id;
  var id = req.params.id;
  db.findUserById(id,findById)

});

// Start listen to request.
app.listen(8088);
