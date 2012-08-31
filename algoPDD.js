// JavaScript Document
var tglTable;
var tglSPK;
var tglMDP;



function refreshTable(){
	
	for(i = 1 ; i<=42 ; i++){
		document.getElementById("d"+i).style.backgroundColor = "white";
		document.getElementById("d"+i).style.color = "black";
		document.getElementById("isi"+i).innerHTML = "";
		
	}

}

function setNameDay(a){
	
	var x = document.getElementById("demo");
	x.innerHTML=weekday[d.getDay()];

}

function setSPK(tanggalnya){
	document.getElementById("d"+tanggalnya).innerHTML="SPK";
	document.getElementById("d"+i).style.backgroundColor = "black";
	document.getElementById("d"+i).style.color = "black";
}


function testResults (form) {
	
	refreshTable();
	
	var tempDateMDP = form.dateMDP.value;
	var tempDate
	
    if(form.paramMDP[0].checked && tempDateMDP == form.dateMDP.defaultValue)alert ("Pilih Tanggal MDP");
	else if(!form.paramMDP[0].checked && !form.paramMDP[1].checked){alert("Pilih MDP atau Ready");}
	else {
		
	var a = tempDateMDP.split("/");
	tglMDP = new Date(a[2],a[1]-1,a[0]);
	tglTable = new Date(a[2],a[1]-1,1);
	
	for(i = 1 ; i <=42 ; i++){
							
							//initialize
							if(i<=7){
								if(tglTable.getDay() == 0 )document.getElementById("h"+i).innerHTML="Minggu";
								if(tglTable.getDay() == 1 )document.getElementById("h"+i).innerHTML="Senin";
								if(tglTable.getDay() == 2 )document.getElementById("h"+i).innerHTML="Selasa";
								if(tglTable.getDay() == 3 )document.getElementById("h"+i).innerHTML="Rabu";
								if(tglTable.getDay() == 4 )document.getElementById("h"+i).innerHTML="Kamis";
								if(tglTable.getDay() == 5 )document.getElementById("h"+i).innerHTML="Jumat";
								if(tglTable.getDay() == 6 )document.getElementById("h"+i).innerHTML="Sabtu";
							}
							
							if(i==31 && tglTable.getDate() == 1){
								document.getElementById("d"+i).style.backgroundColor = "black";
								document.getElementById("d"+i).style.color = "black";	
								i++;
								if(tglTable.getDay() == 0 ){document.getElementById("d"+i).style.backgroundColor = "grey";
													 document.getElementById("d"+i).style.color = "white";
													}
							}
							else if(i==30 && tglTable.getDate() == 1){
								for(b = i ; b <=31 ; b++){
									document.getElementById("d"+i).style.backgroundColor = "black";
									document.getElementById("d"+i).style.color = "black";
									i++;
								}
								if(tglTable.getDay() == 0 ){document.getElementById("d"+i).style.backgroundColor = "grey";
													 document.getElementById("d"+i).style.color = "white";	
													}
							}
							else if(i==29 && tglTable.getDate() == 1){
								for(b = i ; b <=31 ; b++){
									document.getElementById("d"+i).style.backgroundColor = "black";
									document.getElementById("d"+i).style.color = "black";
									i++;
								}
								if(tglTable.getDay() == 0 ){document.getElementById("d"+i).style.backgroundColor = "grey";
													 document.getElementById("d"+i).style.color = "white";	
													}
							}
							else {
								if(tglTable.getDay() == 0 ){document.getElementById("d"+i).style.backgroundColor = "grey";
													 document.getElementById("d"+i).style.color = "white";	
													}	
							}
							///////////////////////////////////////////////////////////////////////////////////////////////
							
							//tglMDP
							if(i == tglMDP.getDate()){
								document.getElementById("d"+i).style.backgroundColor = "red";
								document.getElementById("d"+i).style.color = "white";
								document.getElementById("isi"+i).innerHTML="MDP";
							}
							///////////////////////////////////////////////////////////////////////////////////////////////
							
							
							
							tglTable.setDate(tglTable.getDate()+1);
							}
	}
	
	
    
    
}

function testResults2 (form) {
    var TestVar = new Date(day,month,year);
    alert (TestVar);
}