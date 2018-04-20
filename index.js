const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

const app = express();

const config = require('./config/config');

let db;

MongoClient.connect(config.mongodb, (err, client) => {
  if (err) return console.log(err);
  db = client.db('shower-registry');
  app.listen(3000, () => {
    console.log('database listening on 3000');
  });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('body-parser').json());

app.use(express.static(path.join(__dirname, '/client')));

// For Dev
app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/index.html`));
});

// Gives the frontend all the items
app.get('/data', (req, res) => {
  db
    .collection('items')
    .find()
    .toArray((err, result) => {
      if (err) return console.log(err);
      res.send(result);
    });
});

// Updates the quantity purchased of an item
app.post('/data/quantity', (req, res) => {
  db
    .collection('items')
    .update(
      { _id: ObjectID(req.body._id) },
      { $inc: { quantityPurchased: req.body.quantity } },
      (err, response) => {
        if (err) console.log(err);
        console.log('1 document updated');
      }
    );
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Backend listening on ${port}`);
