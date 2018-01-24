// * Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm.js");

var foods = {
  all: function(cb) {
    orm.selectAll("foods", function(res) {
      cb(res);
    });
  },
  //* Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("foods", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("foods", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.deleteOne("foods", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = foods;
