CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT,
burger_name TINYTEXT NOT NULL,
devoured BOOLEAN DEFAULT 0,
PRIMARY KEY(id)
);

SELECT * FROM burgers;

