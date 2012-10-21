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
		$holidayArrangedData[$date[2]][$date[1]][$date[0]] = $date[0];
		unset($date);
	}
}

$yearData = array();
foreach($holidayArrangedData as $key => $value)
{
	if (!in_array($key,$yearData))
	{
		$yearData[] = $key;
	}
}

$yearLength = count($yearData);

//tolong dibuat outputnya jadi sorted
/*for($y = 0 ; $y < $yearLength ; $y++)
{
	echo $yearData[$y]."<br />";
	for($m = 1; $m <= 12 ; $m++)
	{
		if ($m < 10)
		{
			$month = "0$m";
		}
		else
			$month = $m;
		
		switch($month)
		{
			case '01': echo "January<br />";
						break;
			case '02': echo "February<br />";
						break;
			case '03': echo "March<br />";
						break;
			case '04': echo "April<br />";
						break;
			case '05': echo "May<br />";
						break;
			case '06': echo "June<br />";
						break;
			case '07': echo "July<br />";
						break;
			case '08': echo "August<br />";
						break;
			case '09': echo "September<br />";
						break;
			case '10': echo "October<br />";
						break;
			case '11': echo "November<br />";
						break;
			case '12': echo "December<br />";
						break;
		}
			
		for ($d = 1; $d <= 31 ; $d++)
		{
			if ($d < 10)
			{
				$day = "0$d";
			}
			else 
				$day = $d;
				
			if(isset($holidayArrangedData[$yearData[$y]][$month][$day]))
				echo $holidayArrangedData[$yearData[$y]][$month][$day]."<br />";
			else
				continue;
		}
	}
}
*/
/*
foreach($holidayArrangedData as $key1 => $value1) {
	echo $key1."<br />";
	foreach($value1 as $key2 => $value2) {
		echo "Bulan : ".$key2."<br />";
		foreach($value2 as $key3 => $value3) {
			echo $key3." : ".$value3."<br />";
		}
	}
}*/

?>