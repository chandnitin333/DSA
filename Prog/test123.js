const url = require('url');
let http = require('http');

console.log("Start Server")

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var qr = url.parse(req.url, true);
    let name = qr.query.name;
    res.write("Hello " + name);

    res.end();

}).listen(8000);




