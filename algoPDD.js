// JavaScript Document
var tglTable;
var tglRede;
var tglMDP;
var NoSPK;
var NamaPelanggan;
var telpon;
var hp;
var NamaKendaraan;
var WarnaKendaraan;
var PembayaranDll;
var TglPelunasan;
var TglAFI;
var TglDR;
var TglIN;
var TglHmin1;
var jmlhHari;
var TglPenyerahan;
var monthNames = ["Januari", "Februari", "Maret", "April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
var arrayDate = [];

function loadData(){
			
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

function refreshTable(){
	document.getElementById("paramBulan").innerHTML= "Bulan : ";
	document.getElementById("lebihDate").innerHTML="";
	for(i = 1 ; i<=62 ; i++){
		document.getElementById("d"+i).style.backgroundColor = "white";
		document.getElementById("d"+i).style.color = "black";
		document.getElementById("isi"+i).innerHTML = "";
		
	}

}

function parseDate(tempDate){
	
	var newDate;
	newDate = tempDate.getDate();
	newDate += " "+monthNames[tempDate.getMonth()];
	newDate += " "+tempDate.getFullYear();
	
	return newDate;

}

function parseDateSlash(tempDate){
	
	var newDate;
	newDate = tempDate.getDate();
	newDate += "/"+(tempDate.getMonth()+1);
	newDate += "/"+tempDate.getFullYear();
	
	return newDate;

}


function testResults (form) {
	
	refreshTable();
	
	//untuk tanggal
	var tempDateMDP = form.dateMDP.value;
	var tempDateRede = form.dateReady.value;
	//input tanpa temp
	NoSPK = form.nomorSPK.value;
	NamaPelanggan = form.namaPelanggan.value;
	telpon = form.noTelepon.value;
	hp = form.noHP.value;
	NamaKendaraan = form.namaKendaraan.value;
	WarnaKendaraan = form.warnaKendaraan.value;
	PembayaranDll = form.PembayaranDLL.value;
	
	//filtering
    if(form.paramMDP[0].checked && tempDateMDP == form.dateMDP.defaultValue)alert ("Pilih Tanggal MDP.");
	else if(!form.paramMDP[0].checked && !form.paramMDP[1].checked)alert("Pilih MDP atau Ready.");
	else if(NoSPK == form.nomorSPK.defaultValue || tempDateRede == form.dateReady.defaultValue )alert("Nomor SPK atau Tanggal Ready masih kosong.");
	else if(NamaPelanggan == form.namaPelanggan.defaultValue)alert("Nama Pelanggan masih Kosong");
	else if(telpon == form.noTelepon.defaultValue && hp == form.noHP.defaultValue)alert("Nomor Telepon atau HP masih kosong.");
	else if(NamaKendaraan == form.namaKendaraan.defaultValue)alert("Nama Kendaraan masih kosong.");
	else if(!form.paramTipe[0].checked && !form.paramTipe[1].checked)alert("Pilih CKD atau CBU.");
	else if(WarnaKendaraan == form.warnaKendaraan.defaultValue)alert("Warna Kendaraan masih kosong.");
	else if(!form.paramPembayaran[0].checked && !form.paramPembayaran[1].checked && !form.paramPembayaran[2].checked && !form.paramPembayaran[3].checked && !form.paramPembayaran[4].checked && PembayaranDll == form.PembayaranDLL.defaultValue)alert("Tentukan cara pembayaran.");
	else if(!form.paramSTNK[0].checked && !form.paramSTNK[1].checked)alert("Pilih STNK atau Tanpa STNK.");
	
	else {
		
	var a = tempDateMDP.split("/");
	tglMDP = new Date(a[2],a[1]-1,a[0]);
	
	a = tempDateRede.split("/");
	tglRede = new Date(a[2],a[1]-1,a[0]);
	
	tglTable = new Date(a[2],a[1]-1,1);
	
	//cek value MDP atau Ready
	var flagMDPRede;
	if(form.paramMDP[0].checked)flagMDPRede = form.paramMDP[0].value;
	else flagMDPRede = form.paramMDP[1].value;
		
	//cek Pelunasan
	var flagPembayaran;
	if(form.paramPembayaran[0].checked)flagPembayaran = form.paramPembayaran[0].value;
	else if(form.paramPembayaran[1].checked)flagPembayaran = form.paramPembayaran[1].value;
	else if(form.paramPembayaran[2].checked)flagPembayaran = form.paramPembayaran[2].value;
	else if(form.paramPembayaran[3].checked)flagPembayaran = form.paramPembayaran[3].value;
	else flagPembayaran = form.PembayaranDLL.value;
	TglPelunasan = new Date(tglRede);
	if(flagPembayaran == "cash" && form.paramBedaBank.checked){
			for(i=0;i<3;i++){
			TglPelunasan.setDate(TglPelunasan.getDate()+1);
			if(TglPelunasan.getDay()==6 || TglPelunasan.getDay()==0 )i--;
			else {
				if(arrayDate.indexOf(parseDateSlash(TglPelunasan)) != -1)
					i--;
			}
		}
	
	}
	else if(flagPembayaran == "cash"){
			for(i=0;i<2;i++){
			TglPelunasan.setDate(TglPelunasan.getDate()+1);
			if(TglPelunasan.getDay()==6 || TglPelunasan.getDay()==0 )i--;
			else {
				if(arrayDate.indexOf(parseDateSlash(TglPelunasan)) != -1)
					i--;
			}
		}
	}
	else {
		for(i=0;i<4;i++){
			TglPelunasan.setDate(TglPelunasan.getDate()+1);
			if(TglPelunasan.getDay()==6 || TglPelunasan.getDay()==0 )i--;
			else {
				if(arrayDate.indexOf(parseDateSlash(TglPelunasan)) != -1)
					i--;
			}
		}
	}
	
	//tanggal AFI
	TglAFI = new Date(TglPelunasan);
	for(i=0;i<1;i++){
			TglAFI.setDate(TglAFI.getDate()+1);
			if(TglAFI.getDay()==6 || TglAFI.getDay()==0 )i--;
			else {
				if(arrayDate.indexOf(parseDateSlash(TglAFI)) != -1)i--;
			}
	}
	
	//cek STNK
	var flagSTNK;
	if(form.paramSTNK[0].checked)flagSTNK = form.paramSTNK[0].value;
	else flagSTNK = form.paramSTNK[1].value;
	if(flagSTNK == "nostnk"){
		
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
		var valueDateCKD = document.getElementById("timeCKD").options[document.getElementById("timeCKD").selectedIndex].value;
		if(form.paramTipe[0].checked && valueDateCKD == "6" ){		
				for(i=0;i<6;i++){
					TglIN.setDate(TglIN.getDate()+1);
					if(TglIN.getDay()==0)i--;
					else {
						if(arrayDate.indexOf(parseDateSlash(TglIN)) != -1)i--;
					}
				}
		}
		else{
				for(i=0;i<4;i++){
					TglIN.setDate(TglIN.getDate()+1);
					if(TglIN.getDay()==0)i--;
					else {
						if(arrayDate.indexOf(parseDateSlash(TglIN)) != -1)i--;
					}
				}
		}	
	}
	else if(form.paramPilPol.checked){
		
		//tanggal H - 1
		TglHmin1 = new Date(TglAFI);
		var valueDateCKD = document.getElementById("timeCKD").options[document.getElementById("timeCKD").selectedIndex].value;
		if(form.paramTipe[0].checked){		//jika CKD
				for(i=0;i<17;i++){
					TglHmin1.setDate(TglHmin1.getDate()+1);
					if(TglHmin1.getDay()==0 || TglHmin1.getDay()== 6)i--;
					else {
						if(arrayDate.indexOf(parseDateSlash(TglHmin1)) != -1)i--;
					}
				}
		}
		else{								//jike CBU
				for(i=0;i<30;i++){
					TglHmin1.setDate(TglHmin1.getDate()+1);
					if(TglHmin1.getDay()==0 || TglHmin1.getDay()==6)i--;
					else {
						if(arrayDate.indexOf(parseDateSlash(TglHmin1)) != -1)i--;
					}
				}
		}
		
		//tanggal IN
		TglIN = new Date(TglHmin1);
		for(i=0;i<1;i++){
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
	else if(flagSTNK == "stnk"){
		
		//tanggal H - 1
		TglHmin1 = new Date(TglAFI);
		var valueDateCKD = document.getElementById("timeCKD").options[document.getElementById("timeCKD").selectedIndex].value;
		if(form.paramTipe[0].checked){		//jika CKD
				for(i=0;i<10;i++){
					TglHmin1.setDate(TglHmin1.getDate()+1);
					if(TglHmin1.getDay()==0 || TglHmin1.getDay()== 6)i--;
					else {
						if(arrayDate.indexOf(parseDateSlash(TglHmin1)) != -1)i--;
					}
				}
		}
		else{								//jike CBU
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
		for(i=0;i<1;i++){
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
	
	
	//tanggal BSTB
	TglPenyerahan = new Date(TglIN);
	for(i=0;i<2;i++){
		TglPenyerahan.setDate(TglPenyerahan.getDate()+1);
		if(TglPenyerahan.getDay()==0 )i--;
		else {
			if(arrayDate.indexOf(parseDateSlash(TglPenyerahan)) != -1)i--;
		}
	}
	
	
	//Pasang Bulan
	document.getElementById("paramBulan").innerHTML += monthNames[tglRede.getMonth()];
	
	//Pewarnaan Table
	for(i = 1 ; i <=62 ; i++){
							
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
							
							if((i == 31 && tglTable.getDate() == 1) || (i == 62 && tglTable.getDate() == 1)) {
								document.getElementById("d"+i).style.backgroundColor = "black";
								document.getElementById("d"+i).style.color = "black";	
								i++;
								if(tglTable.getDay() == 0 ) {
									document.getElementById("d"+i).style.backgroundColor = "blue";
									document.getElementById("d"+i).style.color = "white";
								}
							}
							else if((i == 30 && tglTable.getDate() == 1) || (i == 61 && tglTable.getDate() == 1)){
								for(b = i ; b <=i+1 ; b++) {
									document.getElementById("d"+i).style.backgroundColor = "black";
									document.getElementById("d"+i).style.color = "black";
									i++;
								}
								if(tglTable.getDay() == 0 ) {
									document.getElementById("d"+i).style.backgroundColor = "blue";
									document.getElementById("d"+i).style.color = "white";	
								}
							}
							/*else if(i==62 && tglTable.getDate() == 1) {
								document.getElementById("d"+i).style.backgroundColor = "black";
								document.getElementById("d"+i).style.color = "black";	
								i++;
								if(tglTable.getDay() == 0 ) {
									document.getElementById("d"+i).style.backgroundColor = "blue";
									document.getElementById("d"+i).style.color = "white";
								}
							}
							else if(i==61 && tglTable.getDate() == 1) {
								for(b = i ; b <=31 ; b++){
									document.getElementById("d"+i).style.backgroundColor = "black";
									document.getElementById("d"+i).style.color = "black";
									i++;
								}
								if(tglTable.getDay() == 0 ){document.getElementById("d"+i).style.backgroundColor = "blue";
													 document.getElementById("d"+i).style.color = "white";	
													}
							}*/
							else if((i==29 && tglTable.getDate() == 1) || (i == 60 && tglTable.getDate() == 1)) {
								for(b = i ; b <=i+2 ; b++){
									document.getElementById("d"+i).style.backgroundColor = "black";
									document.getElementById("d"+i).style.color = "black";
									i++;
								}
								if(tglTable.getDay() == 0 ) {
									document.getElementById("d"+i).style.backgroundColor = "blue";
									document.getElementById("d"+i).style.color = "white";	
								}
							}
							else {
								if(tglTable.getDay() == 0 ) {
									document.getElementById("d"+i).style.backgroundColor = "blue";
									document.getElementById("d"+i).style.color = "white";	
								}	
							}
							///////////////////////////////////////////////////////////////////////////////////////////////
							//MDP atau Ready
							
							if(flagMDPRede == "mdp") {
									//tglMDP
									if(i == tglMDP.getDate()){
										document.getElementById("d"+i).style.backgroundColor = "red";
										document.getElementById("d"+i).style.color = "white";
										document.getElementById("isi"+i).innerHTML="MDP";
									}
							}
							//tglReady
							if(i == tglRede.getDate()){
										document.getElementById("d"+i).style.backgroundColor = "red";
										document.getElementById("d"+i).style.color = "white";
										document.getElementById("isi"+i).innerHTML="Ready";
							}
							
							//tgl Pelunasan
							if(tglTable.getDate() == TglPelunasan.getDate() && tglTable.getMonth() == TglPelunasan.getMonth() ){
								document.getElementById("d"+i).style.backgroundColor = "yellow";
								document.getElementById("d"+i).style.color = "black";
								document.getElementById("isi"+i).innerHTML="LNS";
							}
							
							//tgl AFI
							if(tglTable.getDate() == TglAFI.getDate() && tglTable.getMonth() == TglAFI.getMonth() ){
								document.getElementById("d"+i).style.backgroundColor = "grey";
								document.getElementById("d"+i).style.color = "white";
								document.getElementById("isi"+i).innerHTML="AFI";
							}
							
							//tgl DR
							if(tglTable.getDate() == TglDR.getDate() && tglTable.getMonth() == TglDR.getMonth() ){
								document.getElementById("d"+i).style.backgroundColor = "DeepPink";
								document.getElementById("d"+i).style.color = "white";
								document.getElementById("isi"+i).innerHTML="DR";
							}
							
							//tgl IN
							if(tglTable.getDate() == TglIN.getDate() && tglTable.getMonth() == TglIN.getMonth() ){
								document.getElementById("d"+i).style.backgroundColor = "black";
								document.getElementById("d"+i).style.color = "white";
								document.getElementById("isi"+i).innerHTML="IN";
							}
							
							//tgl BSTB
							if(tglTable.getDate() == TglPenyerahan.getDate() && tglTable.getMonth() == TglPenyerahan.getMonth() ){
								document.getElementById("d"+i).style.backgroundColor = "green";
								document.getElementById("d"+i).style.color = "white";
								document.getElementById("isi"+i).innerHTML="BSTB";
							}
							
							
							///////////////////////////////////////////////////////////////////////////////////////////////
							
							//Tgl Libur
							if(arrayDate.indexOf(parseDateSlash(tglTable)) != -1){
								document.getElementById("d"+i).style.backgroundColor = "red";
								document.getElementById("d"+i).style.color = "white";
								document.getElementById("isi"+i).innerHTML="Libur";
							}
							
							
							tglTable.setDate(tglTable.getDate()+1);
							}
		//jika lebih DR
		if(TglDR >= tglTable){
			document.getElementById("lebihDate").innerHTML +="<span>DR = "+parseDate(TglDR)+"</span><br />";
		}	
		
		//jika lebih IN
		if(TglIN >= tglTable){
			document.getElementById("lebihDate").innerHTML +="<span>IN = "+parseDate(TglIN)+"</span><br />";
		}
		
		//jika lebih BSTB
		if(TglPenyerahan >= tglTable){
			document.getElementById("lebihDate").innerHTML +="<span>BSTB = "+parseDate(TglPenyerahan)+"</span><br />";
		}
	}
	
	
    
    
}
