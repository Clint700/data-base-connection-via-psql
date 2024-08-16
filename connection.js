const { Client } = require("pg");
const fs = require("fs");

const client = new Client();

client
  .connect()
  .then(() => {
    console.log(`connected to ${process.env.PGDATABASE}!`);
    return client.query("SELECT * FROM bookshop");
  })
  .then((result) => {
    const data = result.rows;
    data.map((info) => {
      info.book_id = info.unique_identifier;
      delete info.unique_identifier;
    });
    const dataFile = JSON.stringify({ Bookshop: data }, null, 4);
    fs.writeFile("bookshop.json", dataFile, () => {
        console.log('success')
    });
    client.end();
  })
  .catch((err) => {
    console.log("connection error:", err);
  });
