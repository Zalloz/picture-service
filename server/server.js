const newrelic = require('newrelic');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const ReactDOM = require("react-dom/server");
const redis = require("redis");

const redisClient = redis.createClient({
  host: "ec2-18-224-3-115.us-east-2.compute.amazonaws.com",
  port: "6379"
});


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
  redisClient.get(image.toString(), function (err, reply) {
    if (err) {
      cb(err, null)
      console.log(err)
    } else {
      if (reply === null) {
        postgres.query(`select * from images where id = ${image}`, (err, res) => {
          if (err) {
            cb(err, null)
          } else {
            cb(null, res.rows[0])
            redisClient.set(image.toString(), JSON.stringify(res.rows[0]), function (err, success) {
              if (err) {
                console.log(err)
              }
            });
          }
        })
      } else {
        cb(null, JSON.parse(reply))
      }
    }
  })
}

http.createServer(function (req, res) {
  if (req.method === 'GET') {
    if (req.url === `/loaderio-b065f3c5c19458f32e5b0af7b3c50eb5/`) {
      let veryifyPath = path.join(__dirname, `loaderio-b065f3c5c19458f32e5b0af7b3c50eb5/`)
      fs.readFile(veryifyPath, (err, verifyFile) => {
        res.end('loaderio-b065f3c5c19458f32e5b0af7b3c50eb5', 'utf-8')
        return
      })
    } else {
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
          let randomPhoto = Math.floor(Math.random() * 2500000 + 7500000)
          getImage(randomPhoto, (err, data) => {
            count++
            if (err) {
            } else {
              photoArr.push(data)
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