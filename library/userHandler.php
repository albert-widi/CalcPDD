<?php
if(!isset($_SESSION['user']) || !isset($_SESISON['rank'])) {
	header("location: LOGIN.php");
}
else {
	$sqlStatement = "Select username FROM pdduser WHERE username = '" + $_SESSION['user']+"'";
	$result = mysql_query($sqlStatement);
	if(!$result) {
		header("location: loginpage");
	}
}
?>