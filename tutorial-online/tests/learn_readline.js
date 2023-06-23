const test = require('express').Router();
const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// r1.question("What is your name? \n", (answer) => {
// 	console.log( p , hn  m "Thank you " + answer);
// 	r1.close();
// });

module.exports = test;