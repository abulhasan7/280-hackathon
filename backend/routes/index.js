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

module.exports = router;
