const { parse } = require('csv-parse');
const fs = require('fs');
const result = [];
fs.createReadStream('fpwg_2023.04.02_23.44.22.csv')
    .pipe(parse({
        comment: "#",
        columns: true,
    }))
    .on('data', (data) => {
        result.push(data);
    }).on('end', () => {
        console.log(result);
        console.log("Done")

    });