	
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
// const hash require('pbkdf2-password')();
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// config
app.set('view engine', 'pug');
app.set('views', './views');

// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use('/', router, );
app.use('/', connect_db);

app.listen(port, function(){
	console.log(`Server running port ${port}`);
});