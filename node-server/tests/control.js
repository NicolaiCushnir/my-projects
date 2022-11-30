const test = require('express').Router();
const path = require('path'); 

var person = {
	name: 'Jeff',
	age: 30
}

test.get('/', (req, res) =>{
	res.json(person);
	res.redirect('/home');
});

test.post('/home', (req, res) => {
	console.log(req.body);
	res.redirect('/home');
});

module.exports = test;