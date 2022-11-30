// Begin : Simple CRUD
app.get('/quotes', function(req, res){
	res.send(req.body);
});

app.post('/quotes', function(req, res){
	console.log(req.body);
	res.send("Wow ");
});
// END : Simple CRUD

app.post('/test', function(req, res){
	let file = fs.appendFile('test/test.txt', function(err){
		if(err) throw err;
		console.log("Ce o fost amu ?");
	});

	console.log(file);
	res.send("Good");
});