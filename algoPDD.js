//global var
var tempDateMDP = form.dateMDP.value;
var tempDateRede = form.dateReady.value;
//input tanpa temp
var NoSPK = form.nomorSPK.value;
var NamaPelanggan = form.namaPelanggan.value;
var telpon = form.noTelepon.value;
var hp = form.noHP.value;
var NamaKendaraan = form.namaKendaraan.value;
var WarnaKendaraan = form.warnaKendaraan.value;
var PembayaranDll = form.PembayaranDLL.value;
var monthNames = ["Januari", "Februari", "Maret", "April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
//0 for %4 february
var monthDayList = [29,31,28,31,30,31,30,31,31,30,31,30,31];

//holiday data
var arrayDate = [];

//var for setData
var tglMDP;
var tglRede;
var tglTable;
var tglPelunasan;
var tglAFI;
var tglDR;
var tglIN;
var tglHmin1;
var tglPenyerahan;
var tglTable;

//flag
var flagMDPRede;

//extend
var month1Name;
var month2Name;
var plus1Month = false;

//table
var tableHeader;
var tableHeader2;

function initPage(form)
{
	document.getElementById("profil1").style.visibility="hidden";
	document.getElementById("profil2").style.visibility="hidden";
	document.getElementById("paramBulan1").style.visibility="hidden";
	document.getElementById("paramBulan2").style.visibility="hidden";
	loadHolidayData();
	setData(form);
	createTable(form);
	//setElement();
}

function loadHolidayData()
{
	if (window.XMLHttpRequest)
	{
		xhttp=new XMLHttpRequest();
	}
	else
	{
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

function parseDate(tempDate)
{
	var newDate;
	newDate = tempDate.getDate();
	newDate += " "+monthNames[tempDate.getMonth()];
	newDate += " "+tempDate.getFullYear();
	
	return newDate;
}

function parseDateSlash(tempDate)
{
	var newDate;
	newDate = tempDate.getDate();
	newDate += "/"+(tempDate.getMonth()+1);
	newDate += "/"+tempDate.getFullYear();
	
	return newDate;
}

function setData()
{
	var a = tempDateMDP.split("/");
	tglMDP = new Date(a[2],a[1]-1,a[0]);
	
	a = tempDateRede.split("/");
	tglRede = new Date(a[2],a[1]-1,a[0]);
	
	tglTable = new Date(a[2],a[1]-1,1);
	
	//cek value MDP atau Ready
	if(form.paramMDP[0].checked) { 
		flagMDPRede = form.paramMDP[0].value;
	}
	else {
		flagMDPRede = form.paramMDP[1].value;
	}
	//--------------------------------------------------------------------
	
	//cek Pelunasan
	var flagPembayaran;
	if(form.paramPembayaran[0].checked) {
		flagPembayaran = form.paramPembayaran[0].value;
	}
	else if(form.paramPembayaran[1].checked) {
		flagPembayaran = form.paramPembayaran[1].value;
	}
	else if(form.paramPembayaran[2].checked) {
		flagPembayaran = form.paramPembayaran[2].value;
	}
	else if(form.paramPembayaran[3].checked) {
		flagPembayaran = form.paramPembayaran[3].value;
	}
	else {
		flagPembayaran = form.PembayaranDLL.value;
	}
	TglPelunasan = new Date(tglRede);
	if(flagPembayaran == "cash" && form.paramBedaBank.checked) {
		for(i=0;i<3;i++){
			TglPelunasan.setDate(TglPelunasan.getDate()+1);
			if(TglPelunasan.getDay()==6 || TglPelunasan.getDay()==0 )i--;
			else {
				if(arrayDate.indexOf(parseDateSlash(TglPelunasan)) != -1)
					i--;
			}
		}

	}
	else if(flagPembayaran == "cash") {
			for(i=0;i<2;i++) {
			TglPelunasan.setDate(TglPelunasan.getDate()+1);
			if(TglPelunasan.getDay()==6 || TglPelunasan.getDay()==0 )i--;
			else {
				if(arrayDate.indexOf(parseDateSlash(TglPelunasan)) != -1)
					i--;
			}
		}
	}
	else {
		for(i=0;i<4;i++) {
			TglPelunasan.setDate(TglPelunasan.getDate()+1);
			if(TglPelunasan.getDay()==6 || TglPelunasan.getDay()==0 ) {
				i--;
			}
			else {
				if(arrayDate.indexOf(parseDateSlash(TglPelunasan)) != -1) {
					i--;
				}
			}
		}
	}
	//----------------------------------------------------------------------
	
	//tanggal AFI
	TglAFI = new Date(TglPelunasan);
	for(i=0;i<1;i++) {
			TglAFI.setDate(TglAFI.getDate()+1);
			if(TglAFI.getDay()==6 || TglAFI.getDay()==0 ) {
				i--;
			}	
			else {
				if(arrayDate.indexOf(parseDateSlash(TglAFI)) != -1)i--;
			}
	}
	//----------------------------------------------------------------------
	
	//cek STNK
	var flagSTNK;
	if(form.paramSTNK[0].checked)flagSTNK = form.paramSTNK[0].value;
	else flagSTNK = form.paramSTNK[1].value;
	if(flagSTNK == "nostnk") {

		//tanggal DR
		TglDR = new Date(TglAFI);
		for(i=0;i<1;i++){
			TglDR.setDate(TglDR.getDate()+1);
			if(TglDR.getDay()==0)i--;
			else {
				if(arrayDate.indexOf(parseDateSlash(TglDR)) != -1)i--;
			}
		}	

		//tanggal IN
		TglIN = new Date(TglDR);
		var valueDateCKD = form.timeCKD.value;
		if(form.paramTipe[0].checked && valueDateCKD == "6" ) {		
				for(i=0;i<6;i++) {
					TglIN.setDate(TglIN.getDate()+1);
					if(TglIN.getDay()==0) {
						i--;
					}
					else {
						if(arrayDate.indexOf(parseDateSlash(TglIN)) != -1)i--;
					}
				}
		}
		else{
				for(i=0;i<4;i++){
					TglIN.setDate(TglIN.getDate()+1);
					if(TglIN.getDay()==0) {
						i--;
					}
					else {
						if(arrayDate.indexOf(parseDateSlash(TglIN)) != -1)i--;
					}
				}
		}	
	}
	else if(form.paramPilPol.checked){
		
		//tanggal H - 1
		TglHmin1 = new Date(TglAFI);
		var valueDateCKD = form.timeCKD.value;
		//jika CKD
		if(form.paramTipe[0].checked) {
			for(i=0;i<17;i++) {
				TglHmin1.setDate(TglHmin1.getDate()+1);
				if(TglHmin1.getDay()==0 || TglHmin1.getDay()== 6)i--;
				else {
					if(arrayDate.indexOf(parseDateSlash(TglHmin1)) != -1)i--;
				}
			}
		}
		//jike CBU
		else {								
			for(i=0;i<30;i++) {
				TglHmin1.setDate(TglHmin1.getDate()+1);
				if(TglHmin1.getDay()==0 || TglHmin1.getDay()==6)i--;
				else {
					if(arrayDate.indexOf(parseDateSlash(TglHmin1)) != -1) {
						i--;
					}
				}
			}
		}

		//tanggal IN
		TglIN = new Date(TglHmin1);
		for(i=0;i<1;i++){
			TglIN.setDate(TglIN.getDate()-1);
			if(TglIN.getDay()==0) { 
				i--;
			}
			else {
						if(arrayDate.indexOf(parseDateSlash(TglIN)) != -1)i--;
			}
		}

		//tanggal DR
		TglDR = new Date(TglIN);
		if(form.paramTipe[0].checked && valueDateCKD == "6" ){		
				for(i=0;i<6;i++){
					TglDR.setDate(TglDR.getDate()-1);
					if(TglDR.getDay()==0)i--;
					else {
						if(arrayDate.indexOf(parseDateSlash(TglDR)) != -1)i--;
					}
				}
		}
		else{
				for(i=0;i<4;i++){
					TglDR.setDate(TglDR.getDate()-1);
					if(TglDR.getDay()==0)i--;
					else {
						if(arrayDate.indexOf(parseDateSlash(TglDR)) != -1)i--;
					}
				}
		}
	}
	else if(flagSTNK == "stnk") {
		//tanggal H - 1
		TglHmin1 = new Date(TglAFI);
		var valueDateCKD = form.timeCKD.value;
		//jika CKD
		if(form.paramTipe[0].checked) {
				for(i=0;i<10;i++){
					TglHmin1.setDate(TglHmin1.getDate()+1);
					if(TglHmin1.getDay()==0 || TglHmin1.getDay()== 6)i--;
					else {
						if(arrayDate.indexOf(parseDateSlash(TglHmin1)) != -1)i--;
					}
				}
		}
		//jike CBU
		else {							
				for(i=0;i<25;i++){
					TglHmin1.setDate(TglHmin1.getDate()+1);
					if(TglHmin1.getDay()==0 || TglHmin1.getDay()==6)i--;
					else {
						if(arrayDate.indexOf(parseDateSlash(TglHmin1)) != -1)i--;
					}
				}
		}	
		//tanggal IN
		TglIN = new Date(TglHmin1);
		for(i=0;i<1;i++) {
			TglIN.setDate(TglIN.getDate()-1);
			if(TglIN.getDay()==0)i--;
			else {
				if(arrayDate.indexOf(parseDateSlash(TglIN)) != -1)i--;
			}
		}

		//tanggal DR
		TglDR = new Date(TglIN);
		if(form.paramTipe[0].checked && valueDateCKD == "6" ){		
			for(i=0;i<6;i++){
				TglDR.setDate(TglDR.getDate()-1);
				if(TglDR.getDay()==0)i--;
				else {
					if(arrayDate.indexOf(parseDateSlash(TglDR)) != -1)i--;
				}
			}
		}
		else {
			for(i=0;i<4;i++){
				TglDR.setDate(TglDR.getDate()-1);
				if(TglDR.getDay()==0)i--;
				else {
					if(arrayDate.indexOf(parseDateSlash(TglDR)) != -1)i--;
				}
			}
		}
	}
	//----------------------------------------------------------------------
	
	//tanggal BSTB
	tglPenyerahan = new Date(TglIN);
	for(i=0;i<2;i++) {
		tglPenyerahan.setDate(tglPenyerahan.getDate()+1);
		if(tglPenyerahan.getDay()==0 )i--;
		else {
			if(arrayDate.indexOf(parseDateSlash(tglPenyerahan)) != -1)i--;
		}
	}
}

function createTable()
{	
	var month1 = tglRede.getMonth();
	var year1 = tglRede.getFullYear();
	var month2 = tglPenyerahan.getMonth();
	var year2 = tglPenyerahan.getFullYear();
	document.getElementById("paramBulan1").innerHTML = monthNames[month1];
	if(month1 != month2) {
		document.getElementById("paramBulan2").innerHTML = monthNames[month2];
		plus1Month = true;
	}

	var start = 1;
	var day;
	if(month1 == 2 && year1%4 == 0) {
		day = monthDayList[0];
	}
	else {
		day = monthDayList[month1];
	}
	
	tableHeader = "<table border='1px' width='600px' height='480px'>" + "<tr>";
	var table = "<tr>";
	var filledTable = fillTable(day, 1);
	table += filledTable;
	tableHeader += table;
	document.getElementById("profil1").innerHTML = tableHeader;
	document.getElementById("paramBulan1").style.visibility="visible";
	document.getElementById("profil1").style.visibility="visible";
	//month2
	if(plus1Month) {
		var day2;
		if(mont2 == 2 && year2%4 ==0) {
			day = monthDayList[0];
		}
		else {
			day = monthDayList[month2];
		}
		
		tableHeader2 = "<table border='1px' width='600px' height='480px'>" + "<tr>";
		var table2 = "<tr>";
		var filledTable2 = fillTable(day, 2);
		table2 += filledTable2;
		tableHeader2 += table;
		document.getElementById("profil2").innerHTML = tableHeader2;
		document.getElementById("paramBulan2").style.visibility="visible";
		document.getElementById("profil2").style.visibility="visible";
	}
}

function fillTable(day, header)
{
	var table = "";
	var hStart = 0;
	var tmpH = 0;
	var tmpDayName;
	
	for(i = 1; i < day; i++) {
		//day name
		if(i <= 7) {
			tmpDayName = fillDayName(tglTable.getDay());
			if(header == 1) {
				tableHeader += "<th>" + tmpDayName + "</th>";
			}
			else {
				tableHeader2 += "<th>" + tmpDayName + "</th>";
			}
		}
		
		table += fillTableElement();
		
		//closing
		if(i%7 == 0 && i == day) {
			table += "</tr></table>";
		}
		else if(i%7 == 0) {
			table += "</tr>" + "<tr>";
		}
		tglTable.setDate(tglTable.getDate()+1);
	}
	return table;
}

function fillDayName(dayNum)
{
	switch(dayNum)
	{
		case 0: 
			return "Minggu";
			break;
		case 1:
			return "Senin";
			break;
		case 2:
			return "Selasa";
			break;
		case 3:
			return "Rabu";
			break;
		case 4:
			return "Kamis";
			break;
		case 5:
			return "Jumat";
			break;
		case 6:
			return "Sabtu";
			break;
	}
}

function fillTableElement()
{
	//monday blocking
	if(tglTable.getDay() == 0) {
		return "<td id='d" + i +"' style='background-color:blue; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>";
	}
	
	//MDP or Ready
	if(flagMDPRede == "mdp") {
		//tglMDP
		if(tglTable.getDate() == tglMDP.getDate() && tglTable.getMonth() == tglMDP.getMonth()) {
			return "<td id='d" + i +"' style='backgroundColor:red; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'>MDP</p></td>";
		}
	}
	
	//tglReady
	if(i == tglRede.getDate()) {
		return "<td id='d" + i +"' style='background-color:red; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'>Ready</p></td>";
	}
	
	//tgl Pelunasan
	if(tglTable.getDate() == TglPelunasan.getDate() && tglTable.getMonth() == TglPelunasan.getMonth()) {
		return "<td id='d" + i +"' style='background-color:yellow; color:black;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'>LNS</p></td>";
	}
	
	//tgl AFI
	if(tglTable.getDate() == TglAFI.getDate() && tglTable.getMonth() == TglAFI.getMonth()) {
		return "<td id='d" + i +"' style='background-color:grey; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'>AFI</p></td>";
	}
	
	//tgl DR
	if(tglTable.getDate() == TglDR.getDate() && tglTable.getMonth() == TglDR.getMonth()) {
		return "<td id='d" + i +"' style='background-color:DeepPink; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'>DR</p></td>";
	}
	
	//tgl IN
	if(tglTable.getDate() == TglIN.getDate() && tglTable.getMonth() == TglIN.getMonth()) {
		return "<td id='d" + i +"' style='background-color:black; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'>IN</p></td>";
	}
	
	//tgl BSTB
	if(tglTable.getDate() == tglPenyerahan.getDate() && tglTable.getMonth() == tglPenyerahan.getMonth() ){
		return "<td id='d" + i +"' style='background-color:green; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'>BSTB</p></td>";
	}
	
	///////////////////////////////////////////////////////////////////////////////////////////////
							
	//Tgl Libur
	if(arrayDate.indexOf(parseDateSlash(tglTable)) != -1){
		return "<td id='d" + i +"' style='background-color:red; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'>Libur</p></td>";
	}
	
	return "<td id='d" + i +"'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>"; 
}