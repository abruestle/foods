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
  id INT AUTO_INCREMENT NOT NULL,
  food_name VARCHAR(200) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT 0,
  allergens VARCHAR(200),
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);
