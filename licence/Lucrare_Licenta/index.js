// Conectarea bibliotecilor necesare
// 
// // Biblioteca pentru crearea routerului
var express = require("express"); 
// Biblioteca care permite accesarea fisierelor din sistema
var fs = require("fs"); 
// Biblioteca cu care parsam continutul formelor
var bodyParser = require("body-parser"); 

// Cream un obiect de tip express pentru a incepe lucrul
var app = express(); 

// Variabila care va fi folosita in locul sesiunii
var user = false; 

// Folosim in aplicatii tehnologii diferite cum ar fi PUG, bodyParser
app.set('view engine', 'pug');
app.set("views", "./views");
app.use(express.static("app"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Functie care va fi indeplinita la accesarea paginii principale a serviciului
app.get("/", function(request, response) {
	var indexPage = [
		{image: "img/teachers.jpg", title: "PROFESORI", url: "/teachers"},
		{image: "img/students.jpg", title: "STUDENTI", url: "/students"},
		{image: "img/courses.jpg", title: "CURSURI", url: "/courses"}
	]
	response.render("index", {"user": user, "indexPage": indexPage});
});

// Functie care va fi indeplinita la accesarea paginii profesorilor
app.get("/teachers", function(request, response) {
	var obj = JSON.parse(fs.readFileSync("../DataBase/database.json", "utf8"));
	var teachers = obj[0].profesori;
	response.render("teachers", {"teachers": teachers, "user": user});
});

// Functie care va fi indeplinita la accesarea paginii studentilor
app.get("/students", function(request, response) {
	var obj = JSON.parse(fs.readFileSync("../DataBase/database.json", "utf8"));
	var students = obj[1].grupe;
	var teachers = obj[0].profesori;
	response.render("students", {"students": students, "teachers": teachers, "user": user});
});

// Functie care va fi indeplinita la accesarea paginii cursurilor
app.get("/courses", function(request, response) {
	var obj = JSON.parse(fs.readFileSync("../DataBase/database.json", "utf8"));
	var courses = obj[2].cursuri;
	var teachers = obj[0].profesori;
	response.render("courses", {"courses": courses, "teachers": teachers, "user": user});
});

// Functie care va fi chemata la accesarea pagnii de logare
app.get("/login", function(request, response) {
	response.render("login");
});

// Functie care va fi chemata la accesarea pagnii de logout
app.get("/logout", function(request, response) {
	if (user) {
		user = false;
	}
	response.redirect("/");
});

// Functie care va fi chemata la accesarea pagnii de autentificare
app.post("/auth", function(request, response) {
	var uname = request.body.log;
	var upass = request.body.pas;
	
	if (user === false && uname === "nicolai" && upass === "nicolai1") {
		user = true;
		response.redirect("/administrare");
	} else {
		response.redirect("/");
	}
});

// Accesarea paginii de administrator
app.get("/administrare", function(request, response) {
	if (user) {
		response.render("administrare", {"user": user});
		return;
	}
	response.redirect("/");
});

// Functie care va fi chemata la accesarea pagnii de autentificare
app.post("/auth", function(request, response) {
	var uname = request.body.log;
	var upass = request.body.pas;
	if (user === false && uname === "nicolai" && upass === "nicolai1") {
		user = true;
		response.redirect("/administrare");
	} else {
		response.redirect("/");
	}
});

// Functie care indeplineste salvarea profesorilor in baza de date
app.post("/saveprof", function(request, response) {
	var obj = JSON.parse(fs.readFileSync("../DataBase/database.json", "utf8"));
	var prof = {
		image: request.body.profImage,
		name: request.body.profName,
		lastname: request.body.profLname,
		rank: request.body.profGrad,
		username: request.body.profUsername,
		link: request.body.profLink
	};
	obj[0].profesori.push(prof);
	var json = JSON.stringify(obj);
	fs.writeFile("../DataBase/database.json", json, "utf8", function(err) {
		if (err) throw err;
		response.redirect("/administrare");
	});
});

// Functie care indeplineste salvarea grupelor de studenti in baza de date
app.post("/savegrupa", function(request, response) {
	var obj = JSON.parse(fs.readFileSync("../DataBase/database.json", "utf8"));
	var grupa = {
		name: request.body.grupname,
		profesori: request.body.grupprofi != "" ? request.body.grupprofi.split(", ") : [],
		studenti: []
	};
	obj[1].grupe.push(grupa);
	var json = JSON.stringify(obj);
	fs.writeFile("../DataBase/database.json", json, "utf8", function(err) {
		if (err) throw err;
		response.redirect("/administrare");
	});
});

// Functie care indeplineste salvarea studentilor in baza de date
app.post("/savestudent", function(request, response) {
	var obj = JSON.parse(fs.readFileSync("../DataBase/database.json", "utf8"));
	var student = {
		name: request.body.studname + " " + request.body.studlname,
		grupa: request.body.studgrup.toLowerCase()
	};
	var n = 0;
	for (var g of obj[1].grupe) {
		if (g.name.toLowerCase() == student.grupa) {
			obj[1].grupe[n].studenti.push(student.name);
		}
		n ++;
	}
	var json = JSON.stringify(obj);
	fs.writeFile("../DataBase/database.json", json, "utf8", function(err) {
		if (err) throw err;
		response.redirect("/administrare");
	});
});

// Functie care indeplineste salvarea cursurilor in baza de date
app.post("/savecurs", function(request, response) {
	var obj = JSON.parse(fs.readFileSync("../DataBase/database.json", "utf8"));
	var curs = {
		name: request.body.cursname,
		profesor: request.body.cursprof,
		grupe: request.body.cursgrupe != "" ? request.body.cursgrupe.split(", ") : []
	};
	obj[2].cursuri.push(curs);
	var json = JSON.stringify(obj);
	fs.writeFile("../DataBase/database.json", json, "utf8", function(err) {
		if (err) throw err;
		response.redirect("/administrare");
	});
});

// Functia care sterge tot contentul din baza de date
app.get("/clearbase", function(request, response) {
	var json = '[{"name":"profesori","profesori":[]},{"name":"studenti","grupe":[]},{"name":"cursuri","cursuri":[]}]';
	fs.writeFile("../DataBase/database.json", json, "utf8", function(err) {
		if (err) throw err;
		response.redirect("/administrare");
	});
})

// Porneste serverul pe http://localhost:8080
app.listen(8080);