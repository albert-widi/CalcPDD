<?php
$username = $_SESSION['user'];
$rank = $_SESSION['rank'];
if(!isset($username) || !isset($rank)) {
	header("location:LOGIN.php");
}
else {
	$sqlStatement = "Select userName FROM userpdd WHERE userName = '".$_SESSION['user']."'";
	$result = mysql_query($sqlStatement);
	if(!$result) {
		header("location: loginpage");
	}
}
?>