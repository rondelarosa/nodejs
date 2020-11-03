const fs = require('fs');

const data = { name: "test" };

fs.writeFile('./write-data.json', JSON.stringify(data), 
    (err) => { console.log('write finished', err); }
);
