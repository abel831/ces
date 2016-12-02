<?php
try{
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	$phone = isset ($_GET["phone"])?$_GET["phone"]:'';

	if ($password == '' || $phone == '') throw new Exception('缺少参数.');
	// if ($password != $tpassword) throw new Exception('两次密码不一致.');
	if (strlen($phone) != 11 || substr($phone, 0, 1) != 1) throw new Exception('用户名错误.');
	if (!is_numeric($phone)) throw new Exception('用户名错误.');
	if (strlen($password) > 15) throw new Exception('密码错误.');

	$now = date('Y-m-d H:i:s', time());
	require_once '../Class/DB.php';
	$data = array(
		'name',
		'password',
		'phone',
		'email',
		'create_at'
		);
	$link=new DB();
	$res = $link->select('user', $data, ['AND'=>['password'=>$password, 'phone'=>$phone]]);
	if (!$res) throw new Exception('暂无内容.');
	echo json_encode(array('code'=>0, 'msg'=>$res));
}catch(Exception $e){
	echo json_encode(array('code'=>1, 'msg'=>$e->getMessage()));
}
exit;