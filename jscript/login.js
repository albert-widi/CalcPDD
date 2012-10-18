function login() {
	var xmlhttp;
	var status;
	
	var username = document.getElementById("loginname").value;
	var password = document.getElementById("loginpass").value;
	
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}
	else {
		xmlhttp = new ActiveXObject("Mircrosoft.XMLHTTP");
	}
	
	xmlhttp.open("GET", "..\res\loginProcess.php?loginname=" + username + "&loginpass=" + password, true);
	xmlhttp.send(null);
	
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readystate == 4 && xmlhttp.status == 200) {
			status = xmlhttp.responseText;
			if(status == "OK") {
				window.open("..\HOME.php");
			}
			else {
				document.getElementById("errorContainer").innerHTML = "Username atau password salah";
			}
		}
	}
}