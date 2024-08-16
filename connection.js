const { Client } = require('pg');

const client = new Client();

client
  .connect()
  .then(() => {
    console.log(`connected to ${process.env.PGDATABASE}!`);
    return client.query("SELECT * FROM bookshop");
  })
  .then((result) => {
    console.log(result.rows);
    client.end();
  })
  .catch((err) => {
    console.log("connection error:", err);
  })
  