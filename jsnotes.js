var startDate = new Date("2020-09-23"); 
var endDate = new Date("2020-09-30");


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
	document.write("<h3>" + dateArr[i] + "</h3>");
	document.write("<p>Morning Ritual</p>");
	document.write("<p>Tech Ladies</p>");
	document.write("<p>Gratitude Journal</p>");
	document.write("<p>Cat Box</p>");
}
