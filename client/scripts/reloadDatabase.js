// Went in Main.js

// for fetching the data from data/data.json
/* let items;
fetch('/data/data.json')
  .then((response) => response.json())
  .then((myJson) => {
    items = myJson.rowData;
  }); */

// for posting from a form without submitting, and resetting the database
// There is no lnger a form in the html doc
/* const form = document.querySelector('.form');
form.addEventListener('submit', postData);
function postData(e) {
  e.preventDefault();
  const name = document.getElementById('name');
  const quote = document.getElementById('quote');

  fetch('/data/load', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify(items),
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => console.log('Success:', response));
} */

// Went in index.js

// receives the data and saves it to the database
/* app.post('/data/load', (req, res) => {
  db.collection('items').insert(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
  });
}); */

// Cloudinary Image Upload

// const cloudinary = require('cloudinary');

/* cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: '',
}); */

/* app.get('/cloud', (req, res) => {
  getLink();
}); */

/* function getLink() {
  db
    .collection('items')
    .find({})
    .forEach((item) => {
      cloudUpload(item.values[0].hyperlink, item.values[0].formattedValue);
    });
}

function cloudUpload(link, name) {
  cloudinary.v2.uploader.upload(
    link,
    {
      public_id: name,
      eager: {
        height: 150,
        crop: 'fill',
      },
    },
    (err, res) => {
      // console.log(res.secure_url);
      db
        .collection('items')
        .update(
          { 'values.hyperlink': link },
          { $set: { 'values.0.hyperlink': res.secure_url } },
          (err, response) => {
            if (err) console.log(err);
            console.log('1 document updated');
          }
        );
    }
  );
} */
