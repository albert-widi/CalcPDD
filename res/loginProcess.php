<?php
session_start();
include '../library/connection.php';

if(isset($_SESSION['username']) && isset($_SESSION['rank'])) {
	header("location:../HOME.php");
}

$username = $_GET['loginname'];
$password = md5($_GET['loginpass']);
$rank;

$sqlStatement = "SELECT userName , rank FROM userpdd WHERE userName = '".$username."' AND password = '".$password."'";
$result = mysql_query($sqlStatement);
$numrows = mysql_num_rows($result);
if($numrows == 1) {
	while($row = mysql_fetch_array($result)) {
		$username = $row['userName'];
		$rank = $row['rank'];
	}
	$_SESSION['user'] = $username;
	$_SESSION['rank'] = $rank;
	echo "OK";
}
else {
	echo "FALSE";
}
?>