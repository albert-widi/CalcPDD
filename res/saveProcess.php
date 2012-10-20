<?php
session_start();
include '../library/connection.php';

$tglMDP;
if($_GET['tglmdp'] != "") {
	$tglMDP = parseMysqlDate($_GET['tglmdp']);
}
else {
	$tglMDP = "";
}
$tglSPK = parseMysqlDate($_GET['tglrede']);
$tglLunas = parseMysqlDate($_GET['tgllunas']);
$tglAFI = parseMysqlDate($_GET['tglafi']);
$tglDR = parseMysqlDate($_GET['tgldr']);
$tglIN = parseMysqlDate($_GET['tglin']);
$tglDelivery = parseMysqlDate($_GET['tgldelivery']);
$namaPelanggan = $_GET['namapelanggan'];
$noTelp = $_GET['telpon'];
$noHP = $_GET['hp'];
$noSPK = $_GET['nospk'];
$namaKendaraan = $_GET['namakendaraan'];
$warnaKendaraan = $_GET['warnakendaraan'];
$stnk = $_GET['stnk'];
$sqlStatement;

if($tglMDP == "") {
	$sqlStatement =  "INSERT INTO dataPDD(tglSPK, tglLunas, tglAFI, tglDR, tglIN, tglDelivery, namaSales, namaCustomer, noTelp, noHP,
					 noSPK, namaKendaraan, warnaKendaraan, stnk)
					 VALUES('".$tglSPK."', '".$tglLunas."', '".$tglAFI."', '".$tglDR."', '".$tglIN."', '".$tglDelivery."', '".$_SESSION['user']
					 ."', '".$namaPelanggan."', '".$noTelp."', '".$noHP."', '".$noSPK."', '".$namaKendaraan."', '".$warnaKendaraan."', '".$stnk."')";
}
else {
	$sqlStatement = "INSERT INTO dataPDD(tglSPK, tglMDP, tglLunas, tglAFI, tglDR, tglIN, tglDelivery, namaSales, namaCustomer, noTelp, noHP,
					 noSPK, namaKendaraan, warnaKendaraan, stnk)
					 VALUES('".$tglSPK."', '".$tglMDP."', '".$tglLunas."', '".$tglAFI."', '".$tglDR."', '".$tglIN."', '".$tglDelivery."', '".$_SESSION['user']
					 ."', '".$namaPelanggan."', '".$noTelp."', '".$noHP."', '".$noSPK."', '".$namaKendaraan."', '".$warnaKendaraan."', '".$stnk."')";
}

$result = mysql_query($sqlStatement);
if($result) {
	echo "OK";
}
else {
	echo $sqlStatement;
	//echo "FAILED";
}

function parseMysqlDate($date) {
	$tmp = explode("/", $date);
	$return = $tmp[2]."/".$tmp[1]."/".$tmp[0];
	return $return;
}
?>