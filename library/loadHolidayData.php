<?php
$holidayData = array();
$sqlStatement = "SELECT * from holidaydata";
$result = mysql_query($sqlStatement);
if($result) {
	while($row = mysql_fetch_array($result)) {
		$holidayData[] = $holidayData['holidayDate'];
	}
}
?>