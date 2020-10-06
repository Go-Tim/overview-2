DROP DATABASE IF EXISTS timcamp;

CREATE DATABASE timcamp;

USE timcamp;

CREATE TABLE sites (
  id int auto_increment primary key not null,
  siteName varchar(255) not null,
  siteArea varchar(255) not null,
  siteState varchar(255) not null,
  elevation int not null,
  temperature int not null,
  weather varchar(255) not null,
  distance decimal(10, 2) not null
);

CREATE TABLE services (
  id int not null,
  name varchar(255),
  description varchar(255),
  price varchar(255),
  image varchar(255)
);

CREATE TABLE activities (
  id int not null,
  name varchar(255) not null,
  image varchar(255) not null
);

CREATE TABLE terrain (
  id int not null,
  name varchar(255) not null,
  image varchar(255) not null
);

CREATE TABLE photos (
  id int not null,
  photo varchar(255) not null,
  userName varchar(255) not null,
  userImage varchar(255) not null,
  date varchar(255) not null,
  likes int not null,
  caption varchar(255) not null
);

CREATE TABLE attractions (
  id int not null,
  name varchar(255) not null,
  image varchar(255) not null,
  distance int not null
);


