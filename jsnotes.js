var startDate = new Date("2020-12-01"); 
var endDate = new Date("2020-12-31");


var getDateArray = function(start, end){

	var 
		arr = new Array();
		dt = new Date(start);

	while(dt <= end ){
		arr.push(new Date(dt));
		dt.setDate(dt.getDate() + 1);
	}

	return arr;


}

var dateArr = getDateArray(startDate,endDate);


//output 

document.write("<h1>To Do List</h1>");
for (var i = 0; i < dateArr.length; i++) {
	document.write("<h3 id='split'>" + dateArr[i] + "</h3>");
	document.write("Check in With Body<br>");
	document.write("Tech Ladies<br>");
	document.write("Gratitude Journal<br>");
	document.write("Cat Box<br>");
	document.write("Github<br>");
	document.write("Read come as you are<br>");
	document.write("Journal<br>");
	document.write("Next Platform//Javascript<br>");
	document.write("WW<br>");
	document.write("You are Capable<br>");


}

