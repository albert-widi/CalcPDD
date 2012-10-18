<?php
include '../library/connection.php';

$username = $_GET['loginname'];
$password = md5($_GET['loginpass']);
$rank;

$sqlStatement = "SELECT userName , rank FROM userpdd WHERE userName = '".$username."' AND password = '".$password."'";
$result = mysql_query($sqlStatement);
if($result) {
	while($row = mysql_fetch_array($result)) {
		$username = $row['userName'];
		$rank = $row['rank'];
	}
	//session_start();
	//$_SESSION['user'] = $username;
	//$_SESSION['rank'] = $rank;
	echo "OK";
}
else {
	echo "FALSE";
}
?>