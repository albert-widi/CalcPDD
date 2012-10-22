<?php
session_start();
include '../library/connection.php';

$newHolidayDate = $_POST['holidayDate'];
$sqlStatement;
if ($newHolidayDate != "")
{
	$sqlStatement = "INSERT INTO holiday VALUES('".$newHolidayDate."')";
	$result = mysql_query($sqlStatement);
}

if ($result)
{
	header("location: ../HOLIDAYLIST.php");
}
else
{	
	echo "Gagal";
}
?>

