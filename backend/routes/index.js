var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();
var db;
// Connection URL
const uri = "mongodb+srv://admin:280hackathon@cluster0.b39b34l.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Database Name
const dbName = '28-hackathon';

(async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  db = client.db(dbName);
})();


/* GET home page. */
router.get('/me', async function (req, res, next) {
  const collection = db.collection('me-gdp');
  const collection2 = db.collection('me-fdi-inflows');
  const collection3 = db.collection('me-fdi-outflows');

  const country = req.query.country;
  const [a, b, c] = [await collection.find({ 'country': country }, { projection: { _id: 0, country: 0 } }).toArray(), await collection2.find({ 'country': country }, { projection: { _id: 0, country: 0 } }).toArray(), await collection3.find({ 'country': country }, { projection: { _id: 0, country: 0 } }).toArray()];
  res.json({ gdp: a[0], inflows: b[0], outflows: c[0] });
  console.log(a);
});

router.get('/agri', async function (req, res, next) {
  const collection = db.collection('agri-percent-gdp');
  const collection2 = db.collection('agri-fertilizers');
  const collection3 = db.collection('agri-fertilizers-prod');
  const country = req.query.country;
  const [a, b, c] = [await collection.find({ 'country': country }, { projection: { _id: 0, country: 0 } }).toArray(), await collection2.find({ 'country': country }, { projection: { _id: 0, country: 0 } }).toArray(), await collection3.find({ 'country': country }, { projection: { _id: 0, country: 0 } }).toArray()];
  res.json({ gdp: a[0], fertilizers: b[0], fertilizersprod: c[0] });
  console.log(a);
});

///
router.get('/debt-gni', async function (req, res, next) {
  const collection = db.collection('debt-gni');
  const country = req.query.country;
  const a = await collection.find({ 'country': country }, { projection: { _id: 0, country: 0 } }).toArray()
  res.json(a[0])
  console.log(a);
});

router.get('/debt-reserves', async function (req, res, next) {
  const collection = db.collection('debt-reserves');
  const country = req.query.country;
  const a = await collection.find({ 'country': country }, { projection: { _id: 0, country: 0 } }).toArray()
  res.json(a[0])
  console.log(a);
});

router.get('/debt-total-debts', async function (req, res, next) {
  const collection = db.collection('debt-total-debts');
  const country = req.query.country;
  const a = await collection.find({ 'country': country }, { projection: { _id: 0, country: 0 } }).toArray()
  res.json(a[0])
  console.log(a);
});

router.get('/imports', async function (req, res, next) {
  const collection = db.collection('imports-exports');
  const a = await collection.find({}, { projection: { _id: 0 } }).toArray()
  res.json(a[0])
  console.log(a);
});


module.exports = router;
