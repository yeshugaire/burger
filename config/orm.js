var connection = require("../config/connection.js");

// object for all our SQL statement functions
var orm = {

	selectAll: function(tableInput, callback) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},

	insertOne: function(table, insertObj, callback) {
    var queryString = "INSERT INTO " + table + " SET ?";
    connection.query(queryString, [insertObj, {devoured: false}], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
//UPDATE burgers SET devoured = false WHERE id = 10;
  	updateOne: function(table, objColVals, condition, callback) {
    var queryString = "UPDATE " + table + " SET ? WHERE ?";
    connection.query(queryString, [objColVals, condition], function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  }
};

 module.exports = orm;