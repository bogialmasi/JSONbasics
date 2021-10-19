const fs = require('fs');

let data = fs.readFile('colors.json', (err, data) => {
    if (err) throw err;
    return data;
});

console.log(`A nyers adatok: ${data}`);