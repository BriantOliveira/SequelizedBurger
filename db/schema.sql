CREATE DATABASE burger_db; 
USE burger_db; 

CREATE TABLE Burgers (
id INT auto_increment NOT NULL, 
name VARCHAR(255) NOT NULL, 
devoured TINYINT(1) DEFAULT '0', 
date timestamp NOT NULL DEFAULT CURRENT_TIMESTRAP, 
PRIMARY KEY (id));