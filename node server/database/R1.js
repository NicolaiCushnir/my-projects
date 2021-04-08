/*Begin R1 */
function R1() {
	// write in browser :
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