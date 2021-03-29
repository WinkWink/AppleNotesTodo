var startDate = new Date("2021-4-01"); 
var endDate = new Date("2021-4-31");


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

document.write("<h1>To Do List April</h1>");
for (var i = 0; i < dateArr.length; i++) {
	document.write("<h3 id='split'>" + dateArr[i] + "</h3>");
	document.write("Stretch<br>");
	document.write("Tech Ladies Board<br>");
	document.write("Gratitude Journal<br>");
	document.write("Cat Box<br>");
	document.write("Take Meds<br>");
	document.write("Read come as you are<br>");
	document.write("Breathe<br>");
	document.write("Work on book club<br>");

}

