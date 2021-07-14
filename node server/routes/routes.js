const router = require('express').Router();
const path = require('path'); 
const fs = require('fs');

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/MAIN.html'));
});

router.get('/VIM', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/VIM.html'));
});

router.get('/HTML5', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/HTML5.html'));
});

router.get('/WEB_PACK', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/WEB_PACK.html'));
});

router.get('/CSS3', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/CSS3.html'));
});

router.get('/SASS', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/SASS.html'));
});

router.get('/JAVASCRIPT', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/JAVASCRIPT.html'));
});

router.get('/PUG_JS', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/PUG_JS.html'));
});

router.get('/TERMINAL', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/TERMINAL.html'));
});

router.get('/GIT', function(req, res){
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

router.get('/CRUD', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/CRUD.html'));
});

router.get('/ECMAScript', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/ECMAScript.html'));
});

router.get('/TYPESCRIPT', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/TYPESCRIPT.html'));
});

router.get('/NETWORKS', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/NETWORKS.html'));
});

router.get('/REACT_JS', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/REACT_JS.html'));
});

router.get('/WEBPACK', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/WEBPACK.html'));
});

router.get('/ARCH_LINUX', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/ARCH_LINUX.html'));
});

router.get('/BOOTSTRAP', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/BOOTSTRAP.html'));
});

router.get('/REDIS', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/REDIS.html'));
});

router.get('/POSTGRES', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/POSTGRES.html'));
});

router.get('/EXPRESS_JS', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/EXPRESS_JS.html'));
});

router.get('/NODE_JS', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/NODE_JS.html'));
});

router.get('/GIT_BASH', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/GIT_BASH.html'));
});

router.get('/BASH_SCRIPTS', function(req, res){
	res.sendFile(path.join(__dirname, '../public', '/html/BASH_SCRIPTS.html'));
});

// router.get('/', (req, res) => res.download('./file.pdf'))

// router.post('/', function(req, res){
//    fs.
// });

module.exports = router;

