var express = require('express');
var app = express();

app.get('/launch', function (req, res) {
    let data = {
        name: "Nitin Chandekar",
        age: 23
    }
    res.send(data);
    //res.send("Hello World!");
});

app.post('/launch', function (req, res) {
    let data = {
        name: "Nitin Chandekar",
        age: 23
    }
    res.send(data);
});

app.listen(9000);

module.exports = app;