fs = require('fs');

function phoneNumber(err, data) {
    console.log({ err, data });
}

data = fs.readdir('../../../', phoneNumber);

console.log('this comes after');
