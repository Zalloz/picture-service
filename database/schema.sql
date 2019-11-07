DROP DATABASE IF EXISTS pictureservice;

CREATE DATABASE pictureservice;

\c pictureservice

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  url varchar(88) NOT NULL
);