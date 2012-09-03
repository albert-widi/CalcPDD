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
var TglPenyerahan;



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
	
	//cek value CKD atau CBU
	var flagCKDCBU;
	if(form.paramTipe[0].checked)flagCKDCBU = form.paramTipe[0].value;
	else flagCKDCBU = form.paramTipe[1].value;
	
	
	
	//cek Pelunasan
	var flagPembayaran;
	if(form.paramPembayaran[0].checked)flagPembayaran = form.paramPembayaran[0].value;
	else if(form.paramPembayaran[1].checked)flagPembayaran = form.paramPembayaran[1].value;
	else if(form.paramPembayaran[2].checked)flagPembayaran = form.paramPembayaran[2].value;
	else if(form.paramPembayaran[3].checked)flagPembayaran = form.paramPembayaran[3].value;
	else flagPembayaran = form.PembayaranDLL.value;
	TglPelunasan = new Date(a[2],a[1]-1,a[0]);
	if(flagPembayaran == "cash"){
			for(i=0;i<2;i++){
			TglPelunasan.setDate(TglPelunasan.getDate()+1);
			if(TglPelunasan.getDay()==6)TglPelunasan.setDate(TglPelunasan.getDate()+2);
			else if(TglPelunasan.getDay()==0)TglPelunasan.setDate(TglPelunasan.getDate()+1);;
		}
	}
	else {
		for(i=0;i<4;i++){
			TglPelunasan.setDate(TglPelunasan.getDate()+1);
			if(TglPelunasan.getDay()==6)TglPelunasan.setDate(TglPelunasan.getDate()+2);
			else if(TglPelunasan.getDay()==0)TglPelunasan.setDate(TglPelunasan.getDate()+1);;
		}
	}
	
	//cek STNK
	var flagSTNK;
	if(form.paramSTNK[0].checked)flagSTNK = form.paramSTNK[0].value;
	else flagSTNK = form.paramSTNK[1].value;
	
	
	//Pewarnaan Table
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
							//MDP atau Ready
							
							if(flagMDPRede == "mdp"){
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
							
							///////////////////////////////////////////////////////////////////////////////////////////////
							
							
							
							tglTable.setDate(tglTable.getDate()+1);
							}
	}
	
	
    
    
}
