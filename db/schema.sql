 -- * Create the `burgers_db`.
 --     * Switch to or use the `burgers_db`.
 --     * Create a `burgers` table with these fields:
 --       * **id**: an auto incrementing int that serves as the primary key.
 --       * **burger_name**: a string.
 --       * **devoured**: a boolean.

 DROP DATABASE IF EXISTS foods_db;

CREATE DATABASE foods_db;

USE foods_db;

CREATE TABLE foods (
  id INT NOT NULL AUTO_INCREMENT,
  food_name VARCHAR(200) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);