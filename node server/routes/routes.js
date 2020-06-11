const router = require('express').Router();
const path = require('path'); 

router.get('/', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/MAIN.html'));
});

router.get('/EMACS', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/EMACS.html'));
});

router.get('/HTML5', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/HTML5.html'));
});

router.get('/CSS3', function (req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/CSS3.html'));
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

