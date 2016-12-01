<?php
header('Content-Type: text/plain');
@$uname = $_REQUEST['uname'] or die('uname-required');
@$upwd = $_REQUEST['upwd'] or die('upwd-required');

$conn = mysqli_connect();

$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

$sql = "SELECT /**/ FROM /**/ WHERE username='$username' AND upwd='$upwd'";
$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_row($result);
if($row===null){
	echo 'err';
}else {
	echo 'ok';
}