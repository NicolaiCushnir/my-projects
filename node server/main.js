
// как закашыровать эти модули ?
const express = require('express');
const path = require('path');
const app = express();
const port = 5555;
const fs = require('fs');
const url = require('url');
const router = require('./routes/routes.js');
const connect_db = require('./database/connect.js');
const http_status = require('./routes/status.js');
const readline = require('readline');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const pug = require('pug');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use('/', router, );
app.use('/', connect_db);

/*Begin R1 */

function R1() {
	// write browser :
	// http://localhost:5555/search/bine/50
	app.get('/search/:flower/:num', function(req, res){
		var data = req.params;
		var num = data.num;
		var reply = "";
		
		for(var i = 1; i <= num; i++) {
			reply += "<h2>" + i + " I love " + data.flower + " too." + "</h2>";
		}

		res.send(reply);
	});

	app.get('/all', sendAll);

	function sendAll(req, res) { res.send(words); } 
}

R1();

/* End R1 */

/* Begin R2 */

function R2() {
	app.get('/add/:word:score', addWord)
} 

/*End R2*/

app.listen(port, function(){
	console.log(`Server running port ${port}`);
});