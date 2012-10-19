<?php
include "connection.php";
$holidayData;
$holidayArrangedData;
$sqlStatement = "SELECT * from holiday";
$result = mysql_query($sqlStatement);
if($result) {
	while($row = mysql_fetch_array($result)) {
		$holidayData[] = $row['holidayDate'];
	}
}
else {
	echo $sqlStatement;
}

$date;

if(isset($holidayData)) {
	foreach($holidayData as $value) {
		$date = explode("/", $value);
		$holidayArrangedData[$date[2]][$date[1]] = $date[0];
		unset($date);
	}
}

//foreach($holidayData as $value) echo $value."<br />";

foreach($holidayArrangedData as $key1 => $value1) {
	echo $key1."<br />";
	foreach($value1 as $key2 => $value2) {
		echo $key2." : ".$value2."<br />";
	}
}
?>