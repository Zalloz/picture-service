setInterval(() => {
  console.log('Ping')
}, 25000)

const faker = require('faker')
const redis = require('redis')

const redisClient = redis.createClient({
  host: "localhost",
  port: "6379"
});

let countFail = 0;
let countSuccess = 0;
const maxTotal = 10000000;

const populate = async () => {
  for (let i = 7500000; i <= 10000000; i++) {
      const hGET = await new Promise((resolve, reject) => {
          redisClient.get(i.toString(), (err, response) => {
              if (err) {
                  reject(err)
              } else {
                  resolve(response)
              }
          })
      })
      if (hGET === null) {
          countFail++
          if (countFail % 10000 === 0 || i === maxTotal) {
              console.log(countFail, 'unset keys.')
          }
          if (i % 10000 === 0) {
              console.log('On key#:', i)
          }
          const url = `https://s3-us-west-1.amazonaws.com/photosformockzalloproject/${faker.random.number({ min: 1, max: 100 })}.jpg`;
          const obj = {
            url
          }
          await new Promise(resolve => redisClient.set(i.toString(), JSON.stringify(obj), resolve));
      } else {
          countSuccess++
          if (countSuccess % 10000 === 0 || i === maxTotal) {
              console.log(countSuccess, 'successes')
          }
      }
  }
}
populate()