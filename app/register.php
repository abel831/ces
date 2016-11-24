<?php
try{
	$name = isset($_GET['name']) ? $_GET['name'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	$tpassword = isset ($_GET["tpassword"])?$_GET["tpassword"]:'';
	$email = isset ($_GET["email"])?$_GET["email"]:'';
	$phone = isset ($_GET["phone"])?$_GET["phone"]:'';

	if ($name == '' || $password == '' || $tpassword == '' || $email == '' || $phone == '') throw new Exception('缺少参数.');
	if ($password != $tpassword) throw new Exception('两次密码不一致.');
	if (strlen($phone) != 11 || substr($phone, 0, 1) != 1) throw new Exception('请输入正确的手机号.');
	if (!is_numeric($phone)) throw new Exception('手机号必须是数字.');
	$pattern='/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/';
	$checkemail = preg_match($pattern, $email);
	if (strlen($name) > 20) throw new Exception('用户名过长.');
	if (strlen($password) > 15 || strlen($tpassword) > 15) throw new Exception('密码不可超过15位.');
	if (strlen($email) > 50) throw new Exception('邮箱过长，请更换邮箱.');

	$now = date('Y-m-d H:i:s', time());
	require_once '../Class/DB.php';
	$data = array(
		'name' => $name,
		'password' => $password,
		'email' => $email,
		'phone' => $phone,
		'create_at' => $now,
		'update_at' => $now
		);
	$link=new DB();
	$inter = $link->insert('user', $data);
	if (!$inter) throw new Exception('提交失败.');
	echo json_encode(array('code'=>0, 'msg'=>'注册成功'));
}catch(Exception $e){
	echo json_encode(array('code'=>1, 'msg'=>$e->getMessage()));
}