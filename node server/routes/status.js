var status = require('express').Router();


status.use(function(err, req, res, next){
    res.type('text/plain');
    res.status(200);
    res.send('200 - Responsed successful for HTTP requests.  ...');
});

status.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Page was not found.');
});

status.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

console.log("\n" + "modulul meu : http status - merge bine.");
console.log("Se afla in folderul : routes" + "\n");

module.exports = status;