<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="jscript/login.js"></script>
<title>Login</title>
</head>

<body>
<div name = "loginContainer">
    <div">Login</div>
    <div>
        <form method = "post">
        <table>
            <tr>
                <td>Username</td>
                <td><input type = "text" id = "loginname" /></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type = "password" id = "loginpass" /></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td><button type = "submit" onclick="login();">Login</button></td>
            </tr>
        </table>
        </form>
    </div>
    <div id="errorContainer"></div>
</div>
</body>
</html>