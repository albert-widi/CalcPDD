<?php
session_start();
include "library/connection.php";
include "library/userHandler.php";
include "library/loadHolidayData.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Holiday List</title>
<script type='Text/JavaScript' src='jscript/scw.js'></script>
</head>

<body>
	<div name = "containerInput">
    	<table>
        	<tr>
            	<td>Hari Libur</td>
                <td><input name="holidayDate" id="holidayDate" type="text" onclick="scwShow(this,event);"/></td>
            </tr>
        </table>
    </div>
    <div name = "containerListLibur">
    	
    </div>
</body>
</html>