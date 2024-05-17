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
    res.status(200).send(data);
});

app.listen(4000);

module.exports = app;