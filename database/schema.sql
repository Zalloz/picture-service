DROP DATABASE IF EXISTS pictureservice;

CREATE DATABASE pictureservice;

\c formservice

CREATE TABLE agents (
  id SERIAL NOT NULL,
  agent_photo varchar(120) NOT NULL,
  CONSTRAINT agent_pkey PRIMARY KEY (id)
);