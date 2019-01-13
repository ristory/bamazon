DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
  item_id INTEGER(10) NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price INTEGER(10)  NOT NULL,
  stock_quantity INTEGER(10) ,
  PRIMARY KEY (item_id)
);
