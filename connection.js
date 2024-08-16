const { Client } = require('pg');

const client = new Client();

client
  .connect()
  .then(() => {
    console.log(`connected to ${process.env.PGDATABASE}!`);
    return client.query("SELECT * FROM bookshop");
  })
  .then((result) => {
    console.log(result.rows); // Logs the query results
  })
  .catch((err) => {
    console.log("connection error:", err);
  })
  .finally(() => {
    client.end(); // Close the connection after the query
  });