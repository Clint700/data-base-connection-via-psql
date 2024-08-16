const fs = require('fs/promises');

fs.readFile('./bookshop.json', 'utf-8')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error('Error reading file:', err);
  });