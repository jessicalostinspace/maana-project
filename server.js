// require express
var express = require("express");
// var httpsRedirect = require('express-https-redirect');
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "./views")));

// // setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'html');

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
	console.log("🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀");
	console.log("🚀 Starship blast-off on port 8000 🚀");
	console.log("🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀");
})

