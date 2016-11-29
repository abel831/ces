<?php
$configPath = 'etc/config.ini';
$configArray = parse_ini_file($configPath, true);
$redishost = array();
if ($configArray === false) {
    $json = json_encode(array ("msg"=>"配置文件读取失败"));
    $json = isset ($_GET['callback']) ? "{$_GET['callback']}($json)" : $json;
    echo $json;
    exit;
} else {
    $database = isset ($configArray['mysql'] ['DATABASE'])?$configArray['mysql'] ['DATABASE']:'';
    $host = isset ($configArray['mysql'] ['HOST'])?$configArray['mysql'] ['HOST']:'';
    $user = isset ($configArray['mysql'] ['USER'])?$configArray['mysql'] ['USER']:'';
    $password = isset ($configArray['mysql'] ['PASSWORD'])?$configArray['mysql'] ['PASSWORD']:'';
}

$con = mysql_connect($host,$user,$password);
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// Create database
if (!mysql_query("CREATE DATABASE ".$database,$con))
  {
  echo "Error creating database: " . mysql_error();
  exit;
  }
// var_dump($con);exit;
// Create table in my_db database
mysql_select_db($database, $con);
$sql = "CREATE TABLE user 
(
user_id int NOT NULL AUTO_INCREMENT, 
PRIMARY KEY(user_id),
name varchar(20),
phone varchar(11),
password varchar(15),
email varchar(50),
create_at datetime,
update_at datetime
)DEFAULT CHARACTER SET utf8";
mysql_query($sql,$con);
mysql_close($con);

echo 'DB Created!';