<?php
session_start();
include '../library/connection.php';

$tampungTgl = array();
$inStatement = "DELETE FROM holiday WHERE holidayDate = ";
if (!empty($_POST['tanggal']))
{
	$tampungTgl = $_POST['tanggal'];
	foreach($tampungTgl as $value)
	{
		echo $value."<br />";
		$inStatement = "DELETE FROM holiday WHERE holidayDate = '".$value."'";
		$result = mysql_query($inStatement);
		echo $inStatement."<br />";
	}
	/*
	$stringLength = strlen($inStatement);
	$inStatement = substr($inStatement,0,$stringLength-1);
	$inStatement .= ")";
	$sqlStatement = "DELETE FROM holiday WHERE holidayDate ".$inStatement;
	
	$result = mysql_query($sqlStatement);
	*/
	if($result) {
		header("location: ../HOLIDAYLIST.php");
	}
	else
		//echo $inStatement;
		echo "gagal";
}
?>