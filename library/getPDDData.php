<?php
function getPDDData() {
	$pddData = array(array());
	$sqlStatement = "SELECT id, namaCustomer, tanggalDelivery FROM dataPDD WHERE sales = '" + $_SESSION['user'] + "'";
	$result = mysql_query($sqlStatement);
	if($result) {
		while($row = mysql_fetch_array($result)) {
			//data declaration
			$pddData['undefined'] = $row['undefined'];
		}
	}
	else {
		$pddData['error'] = "No Data";
	}
}

function getCustomerData($id) {
	$customerData = array();
	$sqlStatement = "SELECT * FROM dataPDD WHERE id = " + id + " AND sales = '" + $_SESISON['user'] + "'";
	$result = mysql_result($sqlStatement);
	if($reuslt) {
		while($row = mysql_fetch_array($result)) {
			$customerData['undefined'] = $row['undefined'];
		}
	}
}
?>