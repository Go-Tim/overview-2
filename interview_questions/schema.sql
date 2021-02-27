DROP DATABASE IF EXISTS interview;

CREATE DATABASE interview;

USE interview;

CREATE TABLE Salesperson (
  id int auto_increment primary key not null,
  name varchar(255) not null,
  age int not null
);

CREATE TABLE Orders (
  id int auto_increment primary key not null,
  order_date date not null,
  salesperson_id int not null,
  amount int not null,
  FOREIGN KEY (salesperson_id)
    REFERENCES Salesperson(id)
);

CREATE TABLE Training (
  id int auto_increment primary key not null,
  salesperson_id int not null,
  start_date date not null,
  end_date date,
  FOREIGN KEY (salesperson_id)
    REFERENCES Salesperson(id)
);

CREATE TABLE Bonus_Pay (
  id int auto_increment primary key not null,
  year int not null,
  tier int not null,
  bonus int not null
);

INSERT INTO Salesperson (name, age) VALUES ('Joe', 61);
INSERT INTO Salesperson (name, age) VALUES ('Bob', 34);
INSERT INTO Salesperson (name, age) VALUES ('Chris', 37);
INSERT INTO Salesperson (name, age) VALUES ('Dan', 41);
INSERT INTO Salesperson (name, age) VALUES ('Ken', 57);
INSERT INTO Salesperson (name, age) VALUES ('Bill', 38);
INSERT INTO Orders (order_date, salesperson_id, amount) VALUES ('2012-08-02', 2, 540);
INSERT INTO Orders (order_date, salesperson_id, amount) VALUES ('2012-01-30', 4, 1800);
INSERT INTO Orders (order_date, salesperson_id, amount) VALUES ('2012-07-14', 1, 460);
INSERT INTO Orders (order_date, salesperson_id, amount) VALUES ('2012-01-29', 2, 1100);
INSERT INTO Orders (order_date, salesperson_id, amount) VALUES ('2013-02-03', 6, 600);
INSERT INTO Orders (order_date, salesperson_id, amount) VALUES ('2013-03-02', 4, 1250);
INSERT INTO Orders (order_date, salesperson_id, amount) VALUES ('2012-05-06', 4, 150);
INSERT INTO Orders (order_date, salesperson_id, amount) VALUES ('2013-04-01', 1, 1000);
INSERT INTO Orders (order_date, salesperson_id, amount) VALUES ('2013-03-05', 2, 950);
INSERT INTO Training (salesperson_id, start_date, end_date) VALUES (1, '2012-01-01', '2012-12-31');
INSERT INTO Training (salesperson_id, start_date, end_date) VALUES (1, '2013-01-01', null);
INSERT INTO Training (salesperson_id, start_date, end_date) VALUES (2, '2012-01-01', '2012-07-31');
INSERT INTO Training (salesperson_id, start_date, end_date) VALUES (2, '2013-01-01', '2013-05-01');
INSERT INTO Training (salesperson_id, start_date, end_date) VALUES (3, '2012-01-01', null);
INSERT INTO Training (salesperson_id, start_date, end_date) VALUES (4, '2012-01-01', '2012-12-31');
INSERT INTO Training (salesperson_id, start_date, end_date) VALUES (5, '2013-01-01', null);
INSERT INTO Training (salesperson_id, start_date, end_date) VALUES (6, '2012-01-01', null);
INSERT INTO Bonus_Pay (year, tier, bonus) VALUES (2012, 750, 500);
INSERT INTO Bonus_Pay (year, tier, bonus) VALUES (2012, 1500, 1000);
INSERT INTO Bonus_Pay (year, tier, bonus) VALUES (2013, 850, 500);
INSERT INTO Bonus_Pay (year, tier, bonus) VALUES (2013, 1600, 1000);