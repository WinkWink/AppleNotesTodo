var startDate = new Date("2020-10-13"); 
var endDate = new Date("2020-11-31");


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
	document.write("<p>Check in With Body</p>");
	document.write("<p>Tech Ladies</p>");
	document.write("<p>Gratitude Journal</p>");
	document.write("<p>Cat Box</p>");
	document.write("<p>Github</p>");
	document.write("<p>Read cayare</p>");
	document.write("<p>Journal</p>");

}

