<?Php
session_start();
include "library/connection.php";
include "library/userHandler.php";
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Kalkulator Delivery - RESULT</title>
	<link href="cssheets/main.css" type="text/css" rel="stylesheet" />
	<script type='Text/JavaScript' src='jscript/algoPDD.js'></script>
    <script type='text/javascript' src="jscript/save.js"></script>
</head>

<body onload="initPage(form);">
	<div id="top"> 
            <div  align="center"><img src="images/logo plato.jpg" width="215" height="43"/></div>
    </div>
	<div id="container"> 
        <div id="content-wrap">
        	<div id="inform-wrap">
                <table>
                	<tr>
                        <td>
                        	NOMOR/TANGGAL SPK
                        </td>
                        <td>
                        	:
                        </td>
                        <td id="iNoTaSPK">
                        	
                        </td>
                    </tr>
                    <tr>
                        <td>
                        	NAMA PELANGGAN
                        </td>
                        <td>
                        	:
                        </td>
                        <td id="iNamaPel">
                        	
                        </td>
                    </tr>
                    <tr>
                        <td>
                        	TELEPON/HP
                        </td>
                        <td>
                        	:
                        </td>
                        <td id="iTelHP">
                        	
                        </td>
                    </tr>
                    <tr>
                        <td>
                        	TYPE/WARNA KENDARAAN
                        </td>
                        <td>
                        	:
                        </td>
                        <td id="iTypeWarna">
                        	
                        </td>
                    </tr>
                    <tr>
                        <td>
                        	PEMBAYARAN
                        </td>
                        <td>
                        	:
                        </td>
                        <td id="iBayar">
                        	
                        </td>
                    </tr>
                   
                </table>	 
            </div> 
            <span id="paramBulan1"></span>
        	<div id="profil1" align="center">
            </div>
			<div id="moreMonth"></div>
            <span id="paramBulan2"></span>
            <div id="profil2" align="center">
            </div>
            
            <div id="lebihDate" align="center">
            </div>
            
            <div id="informBawah-wrap">
        	 <table>
                	<tr>
                        <td>
                        	JANJI PELUNASAN
                        </td>
                        <td>
                        	:
                        </td>
                        <td id="iLunas">
                        	
                        </td>
                    </tr>
                    <tr>
                        <td>
                        	RENCANA PENYERAHAN KENDARAAN
                        </td>
                        <td>
                        	:
                        </td>
                        <td id="iSerah">
                        	
                        </td>
                    </tr>
              </table>
        	</div>
        </div>
       
       <div align="center" style="margin-top:15px;">
       		<input type = "button" onClick="savePDD();" value = "SAVE" style = "width: 120px; height: 45px;"/>
        </div>   
        
        <div id = "savedoc" align="center" style="width:100%; height:30px; background-color:red; margin-top:10px; text-align:center; padding-top:2px;">
        	This Document Not Saved Yet
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
