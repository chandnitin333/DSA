let http = require('http');

const fs = require('fs');


const server = http.createServer();

server.on('request', (req, res) => {

    // fs.readFile("sample.txt", (err, data) => {
    //     if (err) return console.error(err);
    //     res.end(data.toString());
    // })

    const rstream = fs.createReadStream("sample.txt");
    rstream.on('data', (chunkdata) => {
        res.write(chunkdata)
    });

    rstream.on("end", () => {
        res.end()
    });

    rstream.on("error", (err) => {
        console.error(err)
        res.end("File Not Found..!");
    })
})


server.listen(4000, "127.0.0.1");