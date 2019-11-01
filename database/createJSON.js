//cat myFile.json | POST -sS "http://myDB.couchone.com/testDB" -c "application/json"

const startTime = new Date().getTime()

const faker = require('faker');
const Riak = require('basho-riak-client');
const async = require('async');

const nodes = ['127.0.0.1:8087', '127.0.0.1:8088', '127.0.0.1:8089']

const client = new Riak.Client(nodes, function (err, c) {
  if (err) {
    throw new Error(err);
  }
  client.ping(function (err, rslt) {
    if (err) {
      throw new Error(err);
    } else {
      console.log(rslt);
    }
  });
});

var images = [
  {
    "id": "0",
    "url": "https://picsum.photos/id/1/200/300"
  },
  {
    "id": "1",
    "url": "https://picsum.photos/id/2/200/300"
  }
];

// var storeFuncs = [];
// images.forEach(function (image) {
//   // Create functions to execute in parallel to store images
//   storeFuncs.push(function (async_cb) {
//     client.storeValue({
//       bucket: 'img',
//       key: image.id,
//       value: image
//     },
//       function (err, rslt) {
//         async_cb(err, rslt);
//       }
//     );
//   });
// });

// async.parallel(storeFuncs, function (err, rslts) {
//   if (err) {
//     throw new Error(err);
//   }
// });

// client.fetchValue({ bucket: 'img', key: '1', convertToJs: true },
//   function (err, rslt) {
//     if (err) {
//       throw new Error(err);
//     } else {
//       var riakObj = rslt.values.shift();
//       var image0 = riakObj.value;
//       console.log('got here', image0)
//     }
//   }
// );

const generateData = () => {
  let counter = 1;
  for (let i = 1; i <= 17500; i++) {
    let value = {};
    value.id = `${i}`;
    value.url = `https://picsum.photos/id/${faker.random.number({ min: 1, max: 1000 })}/200/300`;
    client.storeValue({
      bucket: 'img',
      key: value.id,
      value: value
    },
      function (err, rslt) {
        counter++;
        if (counter === 17500) {
          client.fetchValue({ bucket: 'img', key: '17500', convertToJs: true }, function (err, rslt) {
            if (err) {
              throw new Error(err);
            } else {
              var riakObj = rslt.values.shift();
              var image = riakObj.value;
              console.log('got here', image)
              client.stop(function (err, rslt) {
                const endTime = new Date().getTime()
                console.log('Done! Took', (endTime - startTime) / 10000, 'seconds.');
                process.exit();
              })
            }
          })
        }
      })
  }
};

// async.parallel(generateData, function (err, rslts) {
//   if (err) {
//     throw new Error(err);
//   }
// });
// setTimeout(function() {
//   client.fetchValue({ b ucket: 'img', key: '10', convertToJs: true }, function (err, rslt) {
//     if (err) {
//       throw new Error(err);
//     } else {
//       console.log('got here', rslt)
//       var riakObj = rslt.values.shift();
//       var image = riakObj.value;
//       console.log('got here', image)
//     }
//   })
// }, 2000)


generateData()