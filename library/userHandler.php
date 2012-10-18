<?php
if(!isset($_SESSION['user'])) {
	header("location: loginpage");
}
else {
	$sqlStatement = "Select username FROM pdduser WHERE username = '" + $_SESSION['user']+"'";
	$result = mysql_query($sqlStatement);
	if(!$result) {
		header("location: loginpage");
	}
}
?>