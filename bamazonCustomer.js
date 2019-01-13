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
          var products = [];
          for (i = 0; i < 10; i++)
          {
            products.push(result[i])
          }

          inquirer.prompt([{
            type: 'input',
            name: 'id',
            message: 'Which Product ID do you want to buy?'
          },
          {
            type: 'input',
            name: 'quantity',
            message: 'How many unit of product do you want to buy?'
          }])
          .then((response) =>{
              for (i = 0; i < 10; i++)
              {
               if (response.id === products[i].item_id)
               {
                  if(response.quantity <= products[i].stock_quantity)
                  {
                    newQuantity = products[i].stock_quantity - response.quantity
                    queryString = "UPDATE products SET stock_quantity = " + newQuantity +
                    " WHERE item_id = " + response.id 
                    connection.query(queryString, function(err, result) {
                      if (err) throw err;
                    });
                    console.log("Remaining Quantity: " + newQuantity)
                    console.log("Total cost: " + response.quantity * products[i].price)
                  }
                  else{
                    console.log("Insufficient quantity!");
                  }
               }
               else{}
              }
          })
  })});

  module.exports = connection;