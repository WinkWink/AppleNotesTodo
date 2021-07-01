var startDate = new Date("2021-7-01"); 
var endDate = new Date("2021-7-30");


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


document.write("<h1>To Do List June</h1>");
for (var i = 0; i < dateArr.length; i++) {
	document.write("<h3 id='split'>" + dateArr[i] + "</h3>");
	document.write("Smoothie + Coffee + Water<br>");
	document.write("Take Meds<br>");
	document.write("Noom<br>");
	document.write("The Daily<br>");
	document.write("Tech Ladies Board<br>");
	document.write("Gratitude Journal<br>");
	document.write("Cat Box<br>");
	document.write("Tonk Box<br>");
	document.write("Code<br>");
	document.write("Exercise @ 6<br>");


	var trying = dateArr[i].toString();
	if (trying.includes("Mon")){
	}else if(trying.includes("Tue")){
		document.write("tech ladies career chat");
	}else if(trying.includes("Wed")){
		document.write("apply to jobs<br>");
	}else if(trying.includes("Thur")){
		document.write("apply to jobs<br>");
	}else if(trying.includes("Fri")){
		document.write("dash<br>");
	}else if(trying.includes("Sat")){
		document.write("dash<br>");
	}else if(trying.includes("Sun")){
		document.write("dash<br>");
	}

}

