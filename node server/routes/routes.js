const router = require('express').Router();
const path = require('path'); 

router.get('/', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/MAIN.html'));
});

router.get('/VIM', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/VIM.html'));
});

router.get('/HTML5', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/HTML5.html'));
});

router.get('/CSS3', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/CSS3.html'));
});

router.get('/SASS', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/SASS.html'));
});

router.get('/WEB_PACK', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/WEB_PACK.html'));
});

router.get('/JAVASCRIPT', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/JAVASCRIPT.html'));
});

router.get('/PUG', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/PUG.html'));
});

router.get('/TERMINAL', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/TERMINAL.html'));
});

router.get('/GIT', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/GIT.html'));
});

router.get('/FORUM', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/FORUM.html'));
});

router.get('/SIGN_IN', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/SIGN_IN.html'));
});

router.get('/SIGN_UP', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/SIGN_UP.html'));
});

router.get('/CATALOG', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/CATALOG.html'));
});

router.get('/HELP', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/HELP.html'));
});

module.exports = router;

