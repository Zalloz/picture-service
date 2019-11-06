var Riak = require('basho-riak-client');
var async = require('async');
var assert = require('assert');

var nodes = ['127.0.0.1:8087', '127.0.0.1:8088', '127.0.0.1:8089']

var client = new Riak.Client(nodes, function (err, c) {
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

var storeFuncs = [];
images.forEach(function (image) {
  // Create functions to execute in parallel to store images
  storeFuncs.push(function (async_cb) {
    client.storeValue({
      bucket: 'img',
      key: image.id,
      value: image
    },
      function (err, rslt) {
        async_cb(err, rslt);
      }
    );
  });
});

async.parallel(storeFuncs, function (err, rslts) {
  if (err) {
    throw new Error(err);
  }
});

client.fetchValue({ bucket: 'img', key: '0', convertToJs: true },
  function (err, rslt) {
    if (err) {
      throw new Error(err);
    } else {
      var riakObj = rslt.values.shift();
      var image0 = riakObj.value;
      console.log('got here', image0)
    }
  }
);

// client.stop(function (err, rslt) {
//   // NB: you may wish to check err
//   process.exit();
// });