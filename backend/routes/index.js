var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();
var db;
// Connection URL
const uri = "mongodb+srv://admin:280hackathon@cluster0.b39b34l.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

// Database Name
const dbName = '280-hackathon';

(async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  db = client.db(dbName);
})();

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());


/* GET home page. */
router.get('/', async function(req, res, next) {
  const collection = db.collection('master');
  const a = await collection.findOne({'name':'Abul Hasan'})
  console.log(a);
  // the following code examples can be pasted here...

});

module.exports = router;
