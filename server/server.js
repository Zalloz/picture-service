

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Client } = require('pg');

const ReactDOM = require("react-dom/server");

import React from "react";
import App from "../client/src/Main.jsx"

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8082;

const postgres = new Client({
  user: "postgres",
  host: "ec2-18-189-189-135.us-east-2.compute.amazonaws.com",
  database: "pictureservice"
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

app.get('/', (req, res) => {
  let picsArrayOfImages = []
  let count = 0
  let randomNumber = Math.floor(Math.random() * 16 + 1);
  for (let i = 0; i < randomNumber; i++) {
    let randomImage = Math.floor(Math.random() * 10000000)
    getImage(randomImage, (err, data) => {
      count++
      if (err) {
      } else {
        picsArrayOfImages.push(data.rows[0])
        // console.log(Object.keys(data))
      }
      if (count === randomNumber) {
        res.writeHead(200, {
          'Content-Type': 'text/html',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "X-Requested-With"
        })
        const reactString = ReactDOM.renderToString(<App data={picsArrayOfImages} />)
        // console.log(reactString)
        res.end(reactString, 'utf-8')
      }
    })
  }
})

app.listen(PORT, () => {
  console.log("Server running!")
});