<?php
$tampungTgl = array();
$inStatement = "IN (";
if (!empty($_POST['tanggal']))
{
	$tampungTgl = $_POST['tanggal'];
	foreach($tampungTgl as $value)
	{
		$inStatement .="'$value',";
	}
	$stringLength = strlen($inStatement);
	$inStatement = substr($inStatement,0,$stringLength-1);
	$inStatement .= ")";
	$sqlStatement = "DELETE FROM holiday WHERE holidayDate ".$inStatement;
	
	$result = mysql_query($sqlStatement);
	if($result) {
		header("location: ../HOLIDAYLIST.php");
	}
	else
		echo $sqlStatement;
}
?>