<?php
include "connection.php";
$pddData = array(array());
$sqlStatement = "SELECT idSave, DATE_FORMAT(tglSPK, '%d/%m/%Y') as tglSPK, DATE_FORMAT(tglMDP, '%d/%m/%Y') as tglMDP, 
				 DATE_FORMAT(tglLunas, '%d/%m/%Y') as tglLunas, DATE_FORMAT(tglAFI, '%d/%m/%Y') as tglAFI, DATE_FORMAT(tglDR, '%d/%m/%Y') as tglDR,
				 DATE_FORMAT(tglIN, '%d/%m/%Y') as tglIN, DATE_FORMAT(tglDelivery, '%d/%m/%Y') as tglIN, namaSales, namaCustomer, noTelp, noHP, 
				 noSPK, namaKendaraan, warnaKendaraan, stnk
				 FROM dataPDD WHERE namaSales = 'albert' AND idSave = 7";
				 
$result = mysql_query($sqlStatement);
$data;
if($result) {
	while($row = mysql_fetch_array($result)) {
		foreach($row as $key => $value) {
			if(!is_numeric($key)) {
				$data[$key] = $value;
			}
		}
		
		/*foreach($data as $key => $value) {
			echo $key." = ".$value."<br />";
		}*/
	}
}
else {
	echo $sqlStatement;
}
?>

