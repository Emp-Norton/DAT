// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Or your desired port

const uri = mongodb://localhost:27017/; // Assuming standard MongoDB port

app.use(bodyParser.json());

app.post('/saveData', (req, res) => {
    MongoClient.connect(uri, (err, client) => {
        if (err) throw err;

        const db = client.db('yourDatabaseName'); 
        const collection = db.collection('yourCollectionName');

        collection.insertOne(req.body, (err, result) => {
            if (err) throw err;
            res.send('Data saved successfully');
            client.close();
        });
    });
});

app.listen(port, () => {
    console.log();
});
