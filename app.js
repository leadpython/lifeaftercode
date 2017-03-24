var express = require('express');
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', function(req, res) {
  res.sendFile(__dirname + 'dist/index.html');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('listening');
});