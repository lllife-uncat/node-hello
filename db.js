var mongojs = require("mongojs"),
  setting = require("./setting").setting,
  db = mongojs(setting.connectionString),
  ObjectId = mongojs.ObjectId;

/**
* Class DbMgr.
* @member {Function} saveUser()
* @member {Function} findUser()
* @member {Function} findUserById()
* @api {Public}
*/
function DbMgr() {

  /**
  * Function saveUser().
  * @param {Object} data
  * @param {Function} callback
  * @api {Public}
  */
  this.saveUser = function(data, callback)  {
    db.collection("User").save(data, callback);
  };

  /**
  * Function findUser()
  * @param {Object} conditions.
  * @param {Function} callback.
  * @api {Public}
  */
  this.findUser = function(conditions, callback){
    db.collection("User").find(conditions, callback);
  };

  /**
  * Function findUserById()
  * @param {String} id.
  * @param {Function} callback.
  * @api {Public}
  */
  this.findUserById = function(id, callback){
    var conditions = { _id: new ObjectId(id) };
    db.collection("User").find(conditions, callback);
  }
}

// Export public all public api.
exports.DbMgr = DbMgr;
