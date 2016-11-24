<?php
class DB
{
	public function __construct()
	{
		$configPath = '../etc/config.ini';
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
		require_once 'medoo.php';
		$this->database = new medoo([
			'database_type' => 'mysql',
			'database_name' => $database,
			'server' => $host,
			'username' => $user,
			'password' => $password,
			'charset' => 'utf8'
			]);
	}

	public function insert($table, $data)
	{
		$res = $this->database->insert($table, $data);
		return $res;
	}

	public function del($table, $data)
	{
		$res = $this->database->delete($table, ['AND'=>$data]);
		return $res;
	}

	public function update($table, $data, $term)
	{
		$res = $this->database->update($table, $data, $term);
		return $res;
	}

	public function select($table, $data, $term)
	{
		$res = $this->database->select($table, $data, $term);
		return $res;
	}


}
// $a=new DB();
// $b = $a->del('test', array('title'=>'user08'));
// var_dump($b);