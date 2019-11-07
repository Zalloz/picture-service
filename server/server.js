const newrelic = require('newrelic');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const ReactDOM = require("react-dom/server");

import React from "react";
import App from "../client/src/Main.jsx"

const publicDirectory = path.join(__dirname, '../client/dist')

const PORT = process.env.PORT || 80;

const postgres = new Client({
  user: "postgres",
  host: "ec2-18-189-189-135.us-east-2.compute.amazonaws.com",
  database: "pictureservice",
  password: "root"
});

postgres.connect();

function getImage(image, cb) {
  postgres.query(`select * from images where id = ${image}`, (err, res) => {
    if (err) {
      cb(err, null)
    } else {
      cb(null, res)
    }
  })
}

http.createServer(function (req, res) {
  if (req.method === 'GET') {
    let contentType = 'text/html';
    let extension = path.extname(req.url)
    if (extension === '.js') {
      contentType = 'text/javascript'
      hostJsOrCss()
    } else if (extension === '.css') {
      contentType = 'text/css'
      hostJsOrCss()
    } else {
      let photoArr = []
      let count = 0
      let randomNumber = 4//Math.floor(Math.random() * 16 + 1);
      for (let i = 0; i < randomNumber; i++) {
        let randomPhoto = Math.floor(Math.random() * 10000000)
        getImage(randomPhoto, (err, data) => {
          count++
          if (err) {
          } else {
            photoArr.push(data.rows[0])
          }
          if (count === randomNumber) {
            res.writeHead(200, {
              'Content-Type': 'text/html',
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "X-Requested-With"
            })
            const reactString = ReactDOM.renderToString(<App data={photoArr} />)
            res.end(reactString, 'utf-8')
          }
        })
      }
    }
  }

  function hostJsOrCss() {
    fs.readFile(req.url === '/' ? publicDirectory + '/index.html' : publicDirectory + req.url, (err, content) => {

      res.writeHead(200, {
        'Content-Type': contentType,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With"
      });
      res.end(content, 'utf-8');
    })
  }

}).listen(PORT, () => {
});