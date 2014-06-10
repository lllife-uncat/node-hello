var mongojs = require("mongojs");
var setting = require("./setting").setting;
var db = mongojs(setting.connectionString);

function DbMgr() {
  this.saveUser = function(data, callback)  {
    db.collection("User").save(data, callback);
  };

  this.findUser = function(conditions, callback){
    db.collection("User").find(conditions, callback);
  };
}

exports.DbMgr = DbMgr;
