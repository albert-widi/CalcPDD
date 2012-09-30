//Javascript Document
function loadHolidayData() {	
	if (window.XMLHttpRequest) {
		xhttp=new XMLHttpRequest();
	}
	else {
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xhttp.open("GET","holiday.xml",false);
	
	xhttp.send(null);
	xmlDoc =  xhttp.responseXML;
	
	//get data from xml tag
	date = xmlDoc.getElementsByTagName('date');
	dateLength = date.length;

	for(i=0;i<dateLength;i++) {
		arrayDate[i] = date[i].childNodes[0].nodeValue;
	}		
}

function setResult() {
	
}


function createTable() {
	
}
