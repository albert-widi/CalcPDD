<?php
include '..\library\connection.php';

$username = $_POST['loginname'];
$password = $_POST['loginpass'];
$rank;

$sqlStatement = "Select userName , rank FROM userpdd WHERE userName = '" + $username + "' AND password = '" + md5($password) + "'";
$result = mysql_query($sqlStatement);
if($result) {
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