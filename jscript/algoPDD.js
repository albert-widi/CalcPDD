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
var monthDayList = [31,28,31,30,31,30,31,31,30,31,30,31,29];
var dayList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var jsDayList = [1, 2, 3, 4, 5, 6, 0];

//holiday data
var arrayDate = [];

//var for setData
var tglMDP;
var tglRede;
var tglMobilRede;
var tglTable;
var TglPelunasan;
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
var plusExplanation = false;

//table
var tableHeader;
var tableHeader2;

function savePDD() {
	var xmlhttp;
	var status;
	
	//var tmp
	var tmpTglRede = parseDateSlash(tglRede);
	var tmpTglMDP;
	if(flagMDPRede != "ready") {
		tmpTglMDP = parseDateSlash(tglMDP);
	}
	else {
		tmpTglMDP = "";
	}
	var tmpTglPelunasan = parseDateSlash(TglPelunasan);
	var tmpTglAFI = parseDateSlash(TglAFI);
	var tmpTglDR = parseDateSlash(TglDR);
	var tmpTglIN = parseDateSlash(TglIN);
	var tmpTglPenyerahan = parseDateSlash(tglPenyerahan);
	var tmpTelpon;
	if(telpon == "Telepon") {
		var tmpTelpon = "";
	}
	else {
		var tmpTelpon = telpon;
	}
	
	var tmpHP;
	if(hp == "HP") {
		tmpHP = "";
	}
	else {
		tmpHP = hp;
	}
	
	var denganTanpaSTNK;
	if(form.paramSTNK[0].checked) { 
		var denganTanpaSTNK =  " - TANPA STNK";
	}
	else if(form.paramSTNK[1].checked) { 
		var denganTanpaSTNK = " - DENGAN STNK";
	}
	
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}
	else {
		xmlhttp = new ActiveXObject("Mircrosoft.XMLHTTP");
	}
	
	xmlhttp.open("GET", "res/saveProcess.php?tglrede=" + tmpTglRede + "&tglmdp=" + tmpTglMDP + "&tgllunas=" + tmpTglPelunasan + "&tglafi=" + tmpTglAFI + 
				 "&tgldr=" + tmpTglDR + "&tglin=" + tmpTglIN + "&tgldelivery=" + tmpTglPenyerahan + "&namapelanggan=" + NamaPelanggan +
				 "&telpon=" + tmpTelpon + "&hp=" + tmpHP  + "&nospk=" + NoSPK + "&namakendaraan=" + NamaKendaraan + "&warnakendaraan=" + WarnaKendaraan +
				 "&stnk=" + denganTanpaSTNK, true);
	xmlhttp.send(null);
	
	status = xmlhttp.responseText;
	alert(status);
	
	/*xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			status = xmlhttp.responseText;
			if(status == "OK") {
				document.getElementById("savedoc").style.backgroundColor = "green";
				document.getElementById("savedoc").innerHTML = "Document Saved";
			}
			else {
				document.getElementById("savedoc").innerHTML = "Failed to save Document";
			}
		}
	}*/
}

function insertInform(){
	NoSPK = form.nomorSPK.value;
	NamaPelanggan = form.namaPelanggan.value;
	telpon = form.noTelepon.value;
	hp = form.noHP.value;
	NamaKendaraan = form.namaKendaraan.value;
	WarnaKendaraan = form.warnaKendaraan.value;
	PembayaranDll = form.PembayaranDLL.value;
	
	document.title = NamaPelanggan;
	
	document.getElementById("iNoTaSPK").innerHTML = NoSPK + " / " + parseDate(tglRede);
	document.getElementById("iNamaPel").innerHTML = NamaPelanggan;
	
	if(telpon != form.noTelepon.defaultValue && hp != form.noHP.defaultValue) {
		document.getElementById("iTelHP").innerHTML = telpon + " / " +hp;	
	}
	else if(telpon == form.noTelepon.defaultValue){
		document.getElementById("iTelHP").innerHTML = hp;
	}
	else document.getElementById("iTelHP").innerHTML = telpon;
	document.getElementById("iTypeWarna").innerHTML = NamaKendaraan + " / " + WarnaKendaraan;
	
	if(form.paramPembayaran[0].checked && form.paramBedaBank.checked) { 
		document.getElementById("iBayar").innerHTML = form.paramPembayaran[0].value + " -  Beda Bank";
	}
	else if(form.paramPembayaran[0].checked) { 
		document.getElementById("iBayar").innerHTML = form.paramPembayaran[0].value.toUpperCase();
	}
	else if(form.paramPembayaran[1].checked) { 
		document.getElementById("iBayar").innerHTML = form.paramPembayaran[1].value.toUpperCase();
	}
	else if(form.paramPembayaran[2].checked) { 
		document.getElementById("iBayar").innerHTML = form.paramPembayaran[2].value.toUpperCase();
	}
	else if(form.paramPembayaran[3].checked) { 
		document.getElementById("iBayar").innerHTML = form.paramPembayaran[3].value.toUpperCase();
	}
	else { 
		document.getElementById("iBayar").innerHTML = "Lain-lain ("+form.PembayaranDLL.value.toUpperCase()+")";
	}

	
	document.getElementById("iLunas").innerHTML = parseDate(TglPelunasan);
	
	if(form.paramSTNK[0].checked) { 
		document.getElementById("iSerah").innerHTML = parseDate(tglPenyerahan) + " - TANPA STNK";
	}
	else if(form.paramSTNK[1].checked) { 
		document.getElementById("iSerah").innerHTML = parseDate(tglPenyerahan) + " - DENGAN STNK";
	}
}

function initPage(form)
{
	document.getElementById("lebihDate").style.visibility="hidden";
	document.getElementById("profil1").style.visibility="hidden";
	document.getElementById("profil2").style.visibility="hidden";
	document.getElementById("paramBulan1").style.visibility="hidden";
	document.getElementById("paramBulan2").style.visibility="hidden";
	loadHolidayData();
	setData(form);
	createTable(form);
	insertInform();
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
		
		tglMobilRede = new Date(tglMDP);
		for(i=0;i<2;i++){
			tglMobilRede.setDate(tglMobilRede.getDate()+1);
			if(tglMobilRede.getDay()==0 || tglMobilRede.getDay()==6 )i--;
			else {
				if(arrayDate.indexOf(parseDateSlash(tglMobilRede)) != -1)i--;
			}
		}
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
	
	//MDP or Ready
	if(flagMDPRede == "mdp") {
		if(flagPembayaran == "cash")TglPelunasan = new Date(tglMobilRede);
		else TglPelunasan = new Date(tglRede);
	}
	else TglPelunasan = new Date(tglRede);
	
	
	if(flagPembayaran == "cash") {
			for(i=0;i<1;i++) {
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
		if(flagMDPRede == "mdp"){
			if(tglMobilRede.getDate() == TglPelunasan.getDate() && tglMobilRede.getMonth() == TglPelunasan.getMonth()){
			for(i=0;i<1;i++){
				TglPelunasan.setDate(TglPelunasan.getDate()+1);
				if(TglPelunasan.getDay()==6 || TglPelunasan.getDay()==0 )i--;
				else {
					if(arrayDate.indexOf(parseDateSlash(TglPelunasan)) != -1)i--;
					}
				}
			}	
		}
		
	}
	//----------------------------------------------------------------------
	
	//tanggal AFI
	
	if(flagPembayaran == "cash" && form.paramBedaBank.checked) {
		TglAFI = new Date(TglPelunasan);
		for(i=0;i<3;i++){
				TglAFI.setDate(TglAFI.getDate()+1);
				if(TglAFI.getDay()==6 || TglAFI.getDay()==0 )i--;
				else {
					if(arrayDate.indexOf(parseDateSlash(TglAFI)) != -1)i--;
				}
		}
	}
	else if(flagPembayaran == "cash"){
		TglAFI = new Date(TglPelunasan);
		for(i=0;i<1;i++){
				TglAFI.setDate(TglAFI.getDate()+1);
				if(TglAFI.getDay()==6 || TglAFI.getDay()==0 )i--;
				else {
					if(arrayDate.indexOf(parseDateSlash(TglAFI)) != -1)i--;
				}
		}
	}
	else if(flagMDPRede == "ready"){
		TglAFI = new Date(TglPelunasan);
		for(i=0;i<1;i++){
				TglAFI.setDate(TglAFI.getDate()+1);
				if(TglAFI.getDay()==6 || TglAFI.getDay()==0 )i--;
				else {
					if(arrayDate.indexOf(parseDateSlash(TglAFI)) != -1)i--;
				}
		}
	}
	else{
		TglAFI = new Date(tglMobilRede);
		for(i=0;i<1;i++){
				TglAFI.setDate(TglAFI.getDate()+1);
				if(TglAFI.getDay()==6 || TglAFI.getDay()==0 )i--;
				else {
					if(arrayDate.indexOf(parseDateSlash(TglAFI)) != -1)i--;
				}
		}
		if(TglAFI.getDate() == TglPelunasan.getDate() && TglAFI.getMonth() == TglPelunasan.getMonth()){
			for(i=0;i<1;i++){
				TglAFI.setDate(TglAFI.getDate()+1);
				if(TglAFI.getDay()==6 || TglAFI.getDay()==0 )i--;
				else {
					if(arrayDate.indexOf(parseDateSlash(TglAFI)) != -1)i--;
				}
			}
		}
		
	}
	
	if( TglAFI.getDate() == TglPelunasan.getDate() && TglAFI.getMonth() == TglPelunasan.getMonth()){
		for(i=0;i<1;i++){
				TglAFI.setDate(TglAFI.getDate()+1);
				if(TglAFI.getDay()==6 || TglAFI.getDay()==0 )i--;
				else {
					if(arrayDate.indexOf(parseDateSlash(TglAFI)) != -1)i--;
				}
		}
	}
	//----------------------------------------------------------------------
	
	//cek STNK
	var flagSTNK;
	if(form.paramSTNK[0].checked) { 
		flagSTNK = form.paramSTNK[0].value;
	}
	else { 
		flagSTNK = form.paramSTNK[1].value;
	}
	if(flagSTNK == "nostnk") {			// JIka tanpa STNK

		//tanggal DR
		TglDR = new Date(TglAFI);
		for(i=0;i<1;i++){
			TglDR.setDate(TglDR.getDate()+1);
			if(TglDR.getDay()==0)i--;
			else {
				if(arrayDate.indexOf(parseDateSlash(TglDR)) != -1) {
					i--;
				}
			}
		}	

		//tanggal IN
		TglIN = new Date(TglDR);
		var valueDateCKD = form.timeCKD.value;
		if(form.paramTipe[0].checked && valueDateCKD == "6" ) {		
				for(i=0;i<6;i++)  {
					TglIN.setDate(TglIN.getDate()+1);
					if(TglIN.getDay()==0) {
						i--;
					}
					else {
						if(arrayDate.indexOf(parseDateSlash(TglIN)) != -1) { 
							i--;
						}
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
						if(arrayDate.indexOf(parseDateSlash(TglIN)) != -1) {
							i--;
						}
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
				if(TglHmin1.getDay()==0 || TglHmin1.getDay()== 6) {
					i--;
				}
				else {
					if(arrayDate.indexOf(parseDateSlash(TglHmin1)) != -1) { 
						i--;
					}
				}
			}
		}
		//jike CBU
		else {								
			for(i=0;i<30;i++) {
				TglHmin1.setDate(TglHmin1.getDate()+1);
				if(TglHmin1.getDay()==0 || TglHmin1.getDay()==6) { 
					i--;
				}
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
				if(arrayDate.indexOf(parseDateSlash(TglIN)) != -1) { 
					i--;
				}
			}
		}

		//tanggal DR
		TglDR = new Date(TglIN);
		if(form.paramTipe[0].checked && valueDateCKD == "6" ) {		
				for(i=0;i<6;i++){
					TglDR.setDate(TglDR.getDate()-1);
					if(TglDR.getDay()==0) { 
						i--;
					}
					else {
						if(arrayDate.indexOf(parseDateSlash(TglDR)) != -1) { 
							i--;
						}
					}
				}
		}
		else{
				for(i=0;i<4;i++){
					TglDR.setDate(TglDR.getDate()-1);
					if(TglDR.getDay()==0) { 
						i--;
					}
					else {
						if(arrayDate.indexOf(parseDateSlash(TglDR)) != -1) { 
							i--;
						}
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
	var explanation;

    //temporary
	var tmpMonth1 = +month1 + 1;
	var tmpMonth2 = +month1 + 2;

	document.getElementById("paramBulan1").innerHTML = monthNames[month1];
	
	//if in 1 month
	if (month1 == month2) {
	    document.getElementById("paramBulan2").innerHTML = monthNames[month2];
	}
	//if 2 month
	else if(tmpMonth1 == month2) {
		document.getElementById("paramBulan2").innerHTML = monthNames[tmpMonth1];
		plus1Month = true;
	}
	//if more than 2 month
	else if(tmpMonth2 == month2) {
	    if (tmpMonth1 == TglIN.getMonth || tmpMonth1 == TglDR.getMonth() || tmpMonth1 == TglAFI.getMonth()) {
			document.getElementById("paramBulan2").innerHTML = monthNames[tmpMonth1];
			plus1Month = true;
		}
		explanation = fillExplanation(tmpMonth2);
		plusExplanation = true;
	}

	var day;
	if(month1 == 1 && year1%4 == 0) {
		day = monthDayList[12];
	}
	else {
		day = monthDayList[month1];
	}
	
	var dayName = "";
	//createDayName
	for(i = 1; i <= 7; i++) {
		if(i == 7) {
			dayName += "<th>" + dayList[0] + "</th>";
		}
		else {
			dayName += "<th>" + dayList[i] + "</th>";
		}
	}
	
	tableHeader = "<table border='1px' width='700px' height='390px'>" + "<tr>" + dayName;;
	var table = "<tr>";
	var filledTable = fillTable(day, 1);
	table += filledTable;
	//month2
	if(plus1Month) {
		//tglTable.setDate(tglTable.getDate()+1);
		var day2;
		if(month2 == 1 && year2%4 ==0) {
			day2 = monthDayList[12];
		}
		else {
			day2 = monthDayList[tmpMonth1];
		}
		
		tableHeader2 = "<table border='1px' width='700px' height='390px'>" + "<tr>" + dayName;
		var table2 = "<tr>";
		var filledTable2 = fillTable(day2, 2);
		table2 += filledTable2;
		if(plusExplanation == true) {
		    document.getElementById("lebihDate").innerHTML = explanation;
		    document.getElementById("lebihDate").style.visibility="visible";
		}
		tableHeader += table;
		document.getElementById("profil1").innerHTML = tableHeader;
		tableHeader2 += table2;
		document.getElementById("profil2").innerHTML = tableHeader2;
		
		//set visible to selected ID
		document.getElementById("paramBulan1").style.visibility="visible";
		document.getElementById("profil1").style.visibility="visible";
		document.getElementById("paramBulan2").style.visibility="visible";
		document.getElementById("profil2").style.visibility="visible";
	}
	else {
	    if (plusExplanation == true) {
	        document.getElementById("lebihDate").innerHTML = explanation;
	        document.getElementById("lebihDate").style.visibility="visible";
	    }
	    tableHeader += table;
	    document.getElementById("profil1").innerHTML = tableHeader;
	    
	    //set visible to selected ID
		document.getElementById("paramBulan1").style.visibility="visible";
		document.getElementById("profil1").style.visibility="visible";
	}
}

function fillExplanation(monthExp) {
    var table = "<table>";
    if (monthExp == TglDR.getMonth()) {
        table += "<tr><td>Tanggal DR</td> <td>:</td>" +
				 "<td>" + parseDate(TglDR) + "</td></tr>";
    }

    if (monthExp == TglIN.getMonth()) {
        table += "<tr><td>Tanggal IN</td> <td>:</td>" +
				 "<td>" + parseDate(TglIN) + "</td></tr>";
	}

	if (monthExp == tglPenyerahan.getMonth()) {
        table += "<tr><td>Tanggal Delivery</td> <td>:</td>" +
				 "<td>" + parseDate(tglPenyerahan) + "</td></tr>";
	}
	
	table += "</table>";
	return table;
}

function fillTable(day, header)
{
	var table = "";
	var hStart = 0;
	var tmpH = 0;
	var breakDay = false;
	var tmpNumber = 1;;
	
	for(i = 1; i <= day; i++) {		
		if(i == 1) {
			for(r = 0; r < 7; r++) {
				if(tglTable.getDay() != jsDayList[r]) {
					table += "<td id='d" + i +"'><div id='mini-Date'><span>x</span></div><p id='isi" + i + "'></p></td>";
				}
				else {
					break;
				}
				tmpNumber++;
			}
		}
		
		table += fillTableElement();
		//closing
		if(tmpNumber%7 == 0 && tmpNumber == day) {
			table += "</tr></table>";
		}
		else if(tmpNumber%7 == 0) {
			table += "</tr>" + "<tr>";
		}
		
		//plus day
		tglTable.setDate(tglTable.getDate()+1);
		tmpNumber++;
	}
	
	return table;
}

function fillDayName(dayNum)
{
	switch(dayNum)
	{
		case 0: 
			return "Minggu";
		case 1:
			return "Senin";
		case 2:
			return "Selasa";
		case 3:
			return "Rabu";
		case 4:
			return "Kamis";
		case 5:
			return "Jumat";
		case 6:
			return "Sabtu";
	}
}

function fillTableElement()
{
	
	
	//MDP or Ready
	if(flagMDPRede == "mdp") {
		//tglMDP
		if(tglTable.getDate() == tglMDP.getDate() && tglTable.getMonth() == tglMDP.getMonth()) {
			if(TglPelunasan.getDate() == tglMDP.getDate() && TglPelunasan.getMonth() == tglMDP.getMonth()) {
			return "<td id='d" + i +"'style='background:url(images/background_mdp-lns.png) no-repeat; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>";
		}
			else {return "<td id='d" + i +"'style='background:url(images/background_mdp.png) no-repeat; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>";}
		}
		
	}
	
	//tglSPK
	if(tglTable.getDate() == tglRede.getDate() && tglTable.getMonth() == tglRede.getMonth()) {
	if(flagMDPRede == "mdp")return "<td id='d" + i +"' style='background:url(images/background_spk.png) no-repeat; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>";
	else return "<td id='d" + i +"' style='background:url(images/background_spk-mdp.png) no-repeat; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>";
	}
	
	//tgl Pelunasan
	if(tglTable.getDate() == TglPelunasan.getDate() && tglTable.getMonth() == TglPelunasan.getMonth()) {
		return "<td id='d" + i +"' style='background:url(images/background_lns.png) no-repeat; color:black;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>";
	}
	
	//tgl AFI
	if(tglTable.getDate() == TglAFI.getDate() && tglTable.getMonth() == TglAFI.getMonth()) {
		return "<td id='d" + i +"' style='background:url(images/background_afi.png) no-repeat; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>";
	}
	
	//tgl DR
	if(tglTable.getDate() == TglDR.getDate() && tglTable.getMonth() == TglDR.getMonth()) {
		return "<td id='d" + i +"' style='background:url(images/background_dr.png) no-repeat; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>";
	}
	
	//tgl IN
	if(tglTable.getDate() == TglIN.getDate() && tglTable.getMonth() == TglIN.getMonth()) {
		return "<td id='d" + i +"' style='background:url(images/background_in.png) no-repeat; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>";
	}
	
	//tgl BSTB
	if(tglTable.getDate() == tglPenyerahan.getDate() && tglTable.getMonth() == tglPenyerahan.getMonth() ){
		return "<td id='d" + i +"' style='background:url(images/background_deliv.png) no-repeat; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>";
	}
	
	///////////////////////////////////////////////////////////////////////////////////////////////
	//monday blocking
	if(tglTable.getDay() == 0) {
		return "<td id='d" + i +"' style='background-color:blue; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>";
	}	
		
		
	//Tgl Libur
	if(arrayDate.indexOf(parseDateSlash(tglTable)) != -1){
		return "<td id='d" + i +"' style='background-color:red; color:white;'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'>Libur</p></td>";
	}
	
	return "<td id='d" + i +"'><div id='mini-Date'><span>" + i + "</span></div><p id='isi" + i + "'></p></td>"; 
}