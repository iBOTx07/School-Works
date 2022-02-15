// Activity Name    : server.js - ROUTING
// Author Name      : Galupe, Raymond Joseph P.
// Section and Code : WD -202 / 2083

var express = require('express');
var app = express();


app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send ('You have successfully created second app!');
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console. log("Example app listening at http://%s:%s", host, port)
})