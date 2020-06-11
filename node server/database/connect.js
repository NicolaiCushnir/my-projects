// Connect to database PostgreSQL

const connect_pg = require('express').Router();
const path = require('path'); 
const fs = require('fs');

// on windows 10 wil be going all well but on one linux it's big problem.
function err_connect() {

	const {Client} = require('pg');
	const client = new Client({
	        user: "postgres",
	        password: "node.js2009",
	        host: "localhost",
	        port: 5432,
	        database: "tutorial-online"  
	    });

	client.connect()
	    .then(() => console.log("Connected successfuly at PostgreSQL database"))
	    .catch(e => console.log(e))
	    .finally(() => client.end())
}

console.log("\n" + "The Route `connect_pg` going well.");
console.log("Se află în folderul database" + "\n");

module.exports = connect_pg;