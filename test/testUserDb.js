var DbMgr = require("../db").DbMgr;
var mgr = new DbMgr();

exports.testSave = function(test) {

  var testUser = {
    name: "Hello",
    age: 10
  };

  mgr.saveUser(testUser, function(err, doc){
    test.equal(err, null);
    test.notEqual(doc, null);
    test.equal(doc.name, "Hello", "Return doc should equal to 'HelloA'");
    test.done();
  });

}
