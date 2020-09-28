DROP DATABASE IF EXISTS bookclub;

CREATE DATABASE bookclub;

USE bookclub;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE books (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  author varchar(100) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE collections (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  book_id int NOT NULL,
  PRIMARY KEY (ID)
);


-- Prepopulate Data
INSERT INTO users (username) VALUES ("Beth");
INSERT INTO users (username) VALUES ("Allen");
INSERT INTO users (username) VALUES ("Sandeep");
INSERT INTO users (username) VALUES ("Taesung");
INSERT INTO users (username) VALUES ("Yana");
INSERT INTO users (username) VALUES ("Thanatip");

INSERT INTO books (title, author) VALUES ("Ubik", "Philip K. Dick");
INSERT INTO books (title, author) VALUES ("Extremely Loud and Incredibly Close", "Jonathan Safran Foer");
INSERT INTO books (title, author) VALUES ("Fledgling", "Octavia E. Butler");
INSERT INTO books (title, author) VALUES ("Ready Player One", "Ernest Cline");
INSERT INTO books (title, author) VALUES ("Redshirts", "John Scalzi");
INSERT INTO books (title, author) VALUES ("Flowers for Algernon", "Daniel Keyes");
INSERT INTO books (title, author) VALUES ("Snow Crash", "Neal Stephenson");
INSERT INTO books (title, author) VALUES ("The Ones Who Walk Away from Omelas", "Ursula K. Le Guin");

INSERT INTO collections (user_id, book_id) VALUES (1, 2);
INSERT INTO collections (user_id, book_id) VALUES (1, 4);
INSERT INTO collections (user_id, book_id) VALUES (1, 7);
INSERT INTO collections (user_id, book_id) VALUES (2, 1);
INSERT INTO collections (user_id, book_id) VALUES (2, 4);
INSERT INTO collections (user_id, book_id) VALUES (2, 5);
INSERT INTO collections (user_id, book_id) VALUES (2, 8);
INSERT INTO collections (user_id, book_id) VALUES (3, 2);
INSERT INTO collections (user_id, book_id) VALUES (3, 6);
INSERT INTO collections (user_id, book_id) VALUES (3, 7);
INSERT INTO collections (user_id, book_id) VALUES (4, 1);
INSERT INTO collections (user_id, book_id) VALUES (4, 4);
INSERT INTO collections (user_id, book_id) VALUES (4, 8);
INSERT INTO collections (user_id, book_id) VALUES (5, 1);
INSERT INTO collections (user_id, book_id) VALUES (5, 3);
INSERT INTO collections (user_id, book_id) VALUES (5, 4);
INSERT INTO collections (user_id, book_id) VALUES (5, 5);
INSERT INTO collections (user_id, book_id) VALUES (5, 7);
INSERT INTO collections (user_id, book_id) VALUES (5, 8);
INSERT INTO collections (user_id, book_id) VALUES (6, 2);
INSERT INTO collections (user_id, book_id) VALUES (6, 8);
