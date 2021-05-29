function hide() {
	var user_name = prompt("Write your name : ");
	var month_borned = prompt("Write your month in which you are borned.");
}
var show_message;

var star = [
	{
		id: 1,
		gender: "female",
		star: "Nicki Minaj",
		borned: 1982,
		month: "december",
		date: 8,
		country: "none"		
	},
	{
		id: 2,
		gender: "female",
		star: "Britney Spears",
		borned: 1981,
		month: "december",
		date: 2,
		country: "America"
	},
	{
		id: 3,
		gender: "male",
		star: "Jared Leto",
		borned: 1971,
		month: "december",
		date: 26,
		country: "America"		
	},
	{
		id: 4,
		gender: "male",
		star: "Chester Bennington",
		borned: 1976,
		month: "martch",
		date: 20,
		country: "Russian"
	},
	{
		id: 5,
		gender: "female",
		star: "Zemfira Talgatovna Ramazanova",
		borned: 1976,
		month: "august",
		date: 26,
		country: "Russian"
	},
	{
		id: 6,
		gender: "male",
		star: "EMINEM",
		borned: 1972,
		month: "october",
		date: 17,
		country: "America"
	}
];

function stars(){
	for(var i = 0; i < star.length; i++) {
		if(month_borned === 'december'){
			console.log(star[i]);
		} else {
			return "bad";
		}
	}
}

// console.log(stars());
// document.write(stars());


// if(user born month) {
// 	the most almost music star
// }