<?php
$pddData = array(array());
$sqlStatement = "SELECT * FROM dataPDD WHERE userName = '" + $_SESSION['user'] + "'";
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
?>