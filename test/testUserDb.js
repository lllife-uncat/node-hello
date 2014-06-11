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

exports.testFind = function(test) {
	var conditions = {
		name: "Hello"
	};

	mgr.findUser(conditions, function(err, docs){
		test.equal(err, null);
		test.notEqual(docs.length, 0);
		test.done();
	});
}

exports.testFindbyId = function(test) {
  var id = "11";
  mgr.findUserById(id, function(err, doc){
    test.equal(err, null);
    test.done();
  });
}
