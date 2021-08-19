// which dates to appear in browser
var startDate = new Date("2021-9-01"); 
var endDate = new Date("2021-9-31");


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

// items that occur everyday on list
// hard code month of list 
document.write("<h1>To Do List July</h1>");
for (var i = 0; i < dateArr.length; i++) {
	date = dateArr[i].toString();
	date = date.split(" ").slice(0, 4).join(' ');
	console.log(date);
	document.write("<h3 id='split'>" + date + "</h3>");
	document.write("Smoothie + Coffee + Water<br>");
	document.write("Take Meds<br>");
	document.write("Noom<br>");
	document.write("Tech Ladies Board<br>");
	document.write("Gratitude Journal<br>");
	document.write("JS practice<br>");
	document.write("Skin Care - Teeth Whiten - Retainer<br>");
	document.write("Cat Box<br>");

// items that occur based on day
	var trying = dateArr[i].toString();
	if (trying.includes("Mon")){
	}else if(trying.includes("Tue")){
		document.write("tech ladies career chat");
	}else if(trying.includes("Wed")){
		document.write("add content to contra and upwork<br>");
	}else if(trying.includes("Thu")){
		document.write("content batch for social media<br>");
	}else if(trying.includes("Fri")){
	}else if(trying.includes("Sat")){
	}else if(trying.includes("Sun")){
	}

}

