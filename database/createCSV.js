const startTime = new Date().getTime();

const fs = require('fs');
const faker = require('faker');
const path = require('path');
const { Client } = require('pg');

const agentTypes = ['listing', 'premier'];

const CSVPath = path.join(__dirname, 'pictureSeedData.csv');

const postgres = new Client({
    user: "postgres",
    host: "localhost",
    database: "pictureservice",
    password: "root"
});
postgres.connect();

const generateData = async () => {
    writeStream.write('url\n');
    for (let i = 1; i <= 10000000; i++) {
        const photo = `https://s3-us-west-1.amazonaws.com/photosformockzalloproject/${faker.random.number({ min: 1, max: 100 })}.jpg`;
        if (!writeStream.write(`${photo}\n`)) {
            await new Promise(resolve => writeStream.once('drain', resolve));
        };
    };
    postgres.query(`copy images(url) FROM '${CSVPath}' DELIMITER ',' CSV HEADER;`, (err, res) => {
        if (err) {
            console.log('CSV Import error:', err);
        } else {
            const endTime = new Date().getTime()
            console.log('Done! Took', endTime - startTime, 'milliseconds.');
            console.log('Successfully imported CSV into table!');
        };
        postgres.end();
    });
};

fs.access(CSVPath, accessErr => {
    console.log('Trying to access file...');
    if (accessErr) {
        console.log('File not accessed!')
        if (accessErr.errno === -2) {
            console.log('File doesnt exist, generating data...');
            writeStream = fs.createWriteStream('pictureSeedData.csv', { flags: 'w' });
            generateData();
            return;
        } else {
            console.log('access error', accessErr);
            postgres.end();
            return;
        };
    } else {
        console.log('File accessed!');
        fs.unlink(CSVPath, unlinkErr => {
            console.log('Unlinking file...')
            if (unlinkErr) {
                console.log('unlink error', unlinkErr);
                postgres.end();
                return;
            } else {
                console.log('File unlinked! Generating data...');
                writeStream = fs.createWriteStream('pictureSeedData.csv', { flags: 'w' });
                generateData();
                return;
            };
        });
    };
});