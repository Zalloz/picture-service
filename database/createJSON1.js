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

const slowInsert2 = () => {
  let startCounter = 0;
  let endCounter = 0;
  setTimeout(async function () {
    while (startCounter < 700000) {
      let startTime = new Date().getTime()
      let endTime = new Date().getTime()
      startCounter++;
      if (startCounter % 10000 === 0) {
        console.log(startCounter)
      }
      let value = {};
      let fakerNumber = faker.random.number({ min: 1, max: 1000 })
      value.id = `${startCounter}`;
      value.url = `https://picsum.photos/id/${fakerNumber}/200/300`
      await new Promise(resolve => client.storeValue({
        bucket: 'img',
        key: value.id,
        value: value
      }, resolve))
    }
  }, 3000)
}

slowInsert2()