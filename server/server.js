const http = require('http');
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const ReactDOM = require("react-dom/server");

import React from "react";
import App from "../client/src/Main.jsx"

const publicDirectory = path.join(__dirname, '../client/dist')

// const app = express();

// app.use(express.static(path.join(__dirname, '/../client/dist')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 80;

const postgres = new Client({
  user: "postgres",
  host: "ec2-18-189-189-135.us-east-2.compute.amazonaws.com",
  database: "pictureservice",
  password: "root"
});

postgres.connect();

// function getImage(image, cb) {
//   postgres.query(`select * from images where id = ${image}`, (err, res) => {
//     if (err) {
//       cb(err, null)
//     } else {
//       cb(null, res)
//     }
//   })
// }

// app.get('/', (req, res) => {
//   let picsArrayOfImages = []
//   let count = 0
//   let randomNumber = Math.floor(Math.random() * 16 + 1);
//   for (let i = 0; i < randomNumber; i++) {
//     let randomImage = Math.floor(Math.random() * 10000000)
//     getImage(randomImage, (err, data) => {
//       count++
//       if (err) {
//       } else {
//         picsArrayOfImages.push(data.rows[0])
//         // console.log(Object.keys(data))
//       }
//       if (count === randomNumber) {
//         res.writeHead(200, {
//           'Content-Type': 'text/html',
//           "Access-Control-Allow-Origin": "*",
//           "Access-Control-Allow-Headers": "X-Requested-With"
//         })
//         const reactString = ReactDOM.renderToString(<App data={picsArrayOfImages} />)
//         // console.log(reactString)
//         res.end(reactString, 'utf-8')
//       }
//     })
//   }
// })

const publicDirectory = path.join(__dirname, 'public')

const postgres = new Client({
  user: "postgres",
  host: "ec2-3-14-133-172.us-east-2.compute.amazonaws.com",
  database: "formservice",
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
      let randomNumber = Math.floor(Math.random() * 16 + 1);
      for (let i = 0; i < randomNumber; i++) {
        let randomPhoto = Math.floor(Math.random() * 10000000)
        getImage(randomPhoto, (err, data) => {
          count++
          if (err) {
          } else {
            agents.push(data.rows[0])
          }
          if (count === randomNumber) {
            res.writeHead(200, {
              'Content-Type': 'text/html',
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "X-Requested-With"
            })
            const reactString = ReactDOMServer.renderToString(<App data={photoArr} />)
            res.end(reactString, 'utf-8')
          }
        })
      }
    }
  }
})
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



  app.listen(PORT, () => {
  });