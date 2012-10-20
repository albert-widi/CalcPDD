<?php
session_start();
include '../library/connection.php';

$tglMDP = $_GET['tglmdp'];
$tglRede = $_GET['tglrede'];
$tglLunas = $_GET['tgllunas'];
$tglAFI = $_GET['tglafi'];
$tglDR = $_GET['tgldr'];
$tglIN = $_GET['tglin'];
$tglDelivery = $_GET['tgldelivery'];
$namaPelanggan = $_GET['namapelanggan'];
$noTelp = $_GET['telpon'];
$noHP = $_GET['hp'];
$noSPK = $_GET['nospk'];
$namaKendaraan = $_GET['namakendaraan'];
$warnaKendaraan = $_GET['warnaKendaraan'];
$stnk = $_GET['stnk'];

//$sqlStatement = "INSERT INTO dataPDD(namaPelanggan, tglRede, tglMDP, tglLunas, tglAFI, 

//echo "MDP : ".$tglMDP.", Rede : ".$tglRede.", Lunas : ".$tglLunas.", AFI : ".$tglAFI.", DR : ".$tglDR.", IN : ".$tglIN.", Delivery : ".$tglDelivery;
?>