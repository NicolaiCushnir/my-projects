const silent = 'test' == process.env.NODE_ENV;
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
const http = require('http');
const mongo = require("mongodb");
const learn_readline = require('./tests/learn_readline.js');

// const hash require('pbkdf2-password')();
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// We need this to build our post string
var querystring = require('querystring');

// config
app.set('view engine', 'pug');
app.set('views', './views');

// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
app.use('/', connect_db);

app.post('/quotes', (req, res) => {
	console.log(req.body);
	res.redirect("/crud");
});

app.listen(port, function(){
  console.log(`Server running port ${port}`);
});