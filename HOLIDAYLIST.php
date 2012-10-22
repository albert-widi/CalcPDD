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
<link href="cssheets/main.css" type="text/css" rel="stylesheet" />
<script type='Text/JavaScript' src='jscript/scw.js'></script>
</head>

<body>
<div id="container">
        <div id="top"> 
            <div  align="center"><img src="images/logo plato.jpg" width="215" height="43"/></div>
            <div id="menubar">
               <ul >
               	<li><a href="HOME.php">HOME</a></li>
                <li><a href="HOLIDAYLIST.php">HOLIDAY</a></li>
                </ul>
            </div>
        </div>
     	
        <div id="content-wrap">
        	<div align="center" style="margin-top:-15px;"><h2>HOLIDAY LIST</h2></div>
            <div name = "containerInput" align="left" style="padding-left:450px;">
                <fieldset style="width:270px;">
                <legend style="font-size:24px; font-weight:bold">Input New Holiday</legend>
                    <form method="post" action="res/inputProcess.php">
                    <table>
                        <tr>
                            <td>Date : </td>
                            <td><input name="holidayDate" id="holidayDate" type="text" onclick="scwShow(this,event);"/></td>
                            <td><input type="submit" value="Input" /></td>
                        </tr>
                    </table>
                    </form>
                </fieldset>
            </div>
        
            <div name = "containerListLibur" align="left" style="margin-top:-80px; padding-left:200px;">
            <fieldset style="width:200px;">
            <legend style="font-size:24px; font-weight:bold">List</legend>
                <div>
                <form method="post" action="res/deleteProcess.php">
                <div align="right">
                    <input type="submit" value="Delete" />
                </div>
                <div align="left" style="margin-top:-30px;">
                        <?php
                        for($y = 0 ; $y < $yearLength ; $y++)
                        {
                            echo "<span style='font-size:22px; font-weight:bold;'>".$yearData[$y]."</span>";
                            for($m = 1; $m <= 12 ; $m++)
                            {
                                if ($m < 10)
                                {
                                    $month = "0$m";
                                }
                                else
                                    $month = $m;
                                echo "<br />&nbsp;&nbsp;<span style='padding-bottom:20px; font-size:18px;'>";
                                switch($month)
                                {
                                    case '01': echo "January";
                                                break;
                                    case '02': echo "February";
                                                break;
                                    case '03': echo "March";
                                                break;
                                    case '04': echo "April";
                                                break;
                                    case '05': echo "May";
                                                break;
                                    case '06': echo "June";
                                                break;
                                    case '07': echo "July";
                                                break;
                                    case '08': echo "August";
                                                break;
                                    case '09': echo "September";
                                                break;
                                    case '10': echo "October";
                                                break;
                                    case '11': echo "November";
                                                break;
                                    case '12': echo "December";
                                                break;
                                }
                                echo "</span>";
                                echo "<span>";
                                for ($d = 1; $d <= 31 ; $d++)
                                {
                                    if ($d < 10)
                                    {
                                        $day = "0$d";
                                    }
                                    else 
                                        $day = $d;
                                    
                                    if(isset($holidayArrangedData[$yearData[$y]][$month][$day]))
                                    {
                                        $value = $day."/".$month."/".$yearData[$y];
                                        echo "<br /><span>&nbsp;&nbsp;&nbsp;&nbsp;<input type='checkbox' name='tanggal[]' value='$value' /></span>";
                                        echo "&nbsp;&nbsp;<span style='font-size:16px;'>";
                                        echo $holidayArrangedData[$yearData[$y]][$month][$day];
                                        echo "</span>";
                                    }
                                        
                                    else
                                        continue;
                                    
                                }
                                echo "</span>";
                            }
                        }
                        ?>
                    </div>
                    </form>
                </div>
            </fieldset>
            </div>
        </div>
        
    	<div id="bottom">
        	<div>
                <img src="images/footer.jpg" width="900" height="34" />
                Copyright 2012
            </div>
        </div>
</div>
</body>
</html>