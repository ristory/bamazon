var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);

    var queryString = "SELECT * FROM products";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          console.log(result);
          inquirer.prompt({
            type: 'input',
            name: 'ID question',
            message: 'Which Product ID do you want to buy?'
          }),function(response)
          {
               
          };

          inquirer.prompt({
            type: 'input',
            name: 'Unit of Products question',
            message: 'How many unit of product do you want to buy?'
          }),function(response)
          {
               
          };
        });
  });

  module.exports = connection;