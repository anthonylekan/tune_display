var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.send("Hello World!");
});


var port = process.env.PORT || 8080

app.listen(8080, () => console.log("Server started!"));