var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();
var db;
// Connection URL
const uri = "mongodb+srv://admin:280hackathon@cluster0.b39b34l.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

// Database Name
const dbName = '28-hackathon';

(async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  db = client.db(dbName);
})();


/* GET home page. */
router.get('/me-gdp', async function(req, res, next) {
  const collection = db.collection('me-gdp');
  const country = req.query.country;
  const a = await collection.findOne({'country':country})
  res.json(a)
  console.log(a);
});

/* GET home page. */
router.get('/me-fdi-inflows', async function(req, res, next) {
  const collection = db.collection('me-fdi-inflows');
  const country = req.query.country;
  const a = await collection.findOne({'country':country})
  res.json(a)
  console.log(a);
});


/* GET home page. */
router.get('/me-fdi-outflows', async function(req, res, next) {
  const collection = db.collection('me-fdi-outflows');
  const country = req.query.country;
  const a = await collection.findOne({'country':country})
  res.json(a)
  console.log(a);
});

router.get('/agri-percent-gdp', async function(req, res, next) {
  const collection = db.collection('agri-percent-gdp');
  const country = req.query.country;
  const a = await collection.findOne({'country':country})
  res.json(a)
  console.log(a);
});

router.get('/agri-fertilizers', async function(req, res, next) {
  const collection = db.collection('agri-fertilizers');
  const country = req.query.country;
  const a = await collection.findOne({'country':country})
  res.json(a)
  console.log(a);
});

router.get('/agri-fertilizers-prod', async function(req, res, next) {
  const collection = db.collection('agri-fertilizers-prod');
  const country = req.query.country;
  const a = await collection.findOne({'country':country})
  res.json(a)
  console.log(a);
});

///
router.get('/debt-gni', async function(req, res, next) {
  const collection = db.collection('debt-gni');
  const country = req.query.country;
  const a = await collection.findOne({'country':country})
  res.json(a)
  console.log(a);
});

router.get('/debt-reserves', async function(req, res, next) {
  const collection = db.collection('debt-reserves');
  const country = req.query.country;
  const a = await collection.findOne({'country':country})
  res.json(a)
  console.log(a);
});

router.get('/debt-total-debts', async function(req, res, next) {
  const collection = db.collection('debt-total-debts');
  const country = req.query.country;
  const a = await collection.findOne({'country':country})
  res.json(a)
  console.log(a);
});
module.exports = router;
