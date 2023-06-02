const { Client } = require('pg');
const client = new Client({
  user: 'root',
  database: 'test_db',
  password: 'root',
  port: 5432,
  host: "172.20.0.4"
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = client;