const express = require("express");
const app = express();
const PORT = 10;
const path = require("path");

// middleware
app.use(express.static("public"));

// routes
app.get("/", function(req, res) {
	res.sendFile(__dirname + '/naruto.html');
});

app.get("/choose.html", function(req, res) {
	res.sendFile(__dirname + '/choose.html');
});

// server listen: port
app.listen(PORT, function() {
	console.log("Serverul lucrează pe portul " + PORT);
});