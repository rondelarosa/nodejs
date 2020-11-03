const fs = require('fs');

const data = require('./data.json');

// able to access as json
console.log(data.name);

fs.readFile('./data.json', 'utf-8', (err, data) => {
    // here it requires to be converted from string to json
    const transformed = JSON.parse(data);
    // now able to acess via property name otherwise will be undefined
    console.log(transformed.name);
});
