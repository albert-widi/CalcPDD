<?php
function getSalesData() {
	$salesData = array();
	$sqlStatement = "SELECT * FROM userPDD WHERE rank = 'SALES'";
	$result = mysql_query($sqlStatement);
	if($result) {
		while($row = mysql_fetch_array($result)) {
			$salesData['undefined'] = $row['undefined'];
		}
	}
}
?>