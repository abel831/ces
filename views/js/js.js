var tcode = '';
$(document).ready(function(){
	tcode = Math.ceil(Math.random()*9000)+1000;//随机生成一个4位数
	$('#Verify').text(tcode);
});
function getCode() {
	$('#err').text("");
	tcode = Math.ceil(Math.random()*9000)+1000;
	$('#Verify').text(tcode);
}

function sub() {
	var uname = $('#uname').val();
	var unameName = $('#uname').attr('name');
	var phone = $('#phone').val();
	var phoneName = $('#phone').attr('name');
	var password = $('#password').val();
	var passwordName = $('#password').attr('name');
	var tpassword = $('#tpassword').val();
	var tpasswordName = $('#tpassword').attr('name');
	var email = $('#email').val();
	var emailName = $('#email').attr('name');
	var code = $('#code').val();
	var codeName = $('#code').attr('name');

	var obj = {};
	obj[unameName] = uname;
	obj[phoneName] = phone;
	obj[passwordName] = password;
	obj[tpasswordName] = tpassword;
	obj[emailName] = email;
	obj[codeName] = code;
	var data = '';
	for (key in obj)
	{
		if (key == 'tpassword') {
			var check = checkval(key, obj['password'], obj[key]);
		} else {
			var check = checkval(key, obj[key]);
		}
		if (check === false) {
			return;
		}
		data = data + key + '=' + obj[key] + '&';
	}

	$.ajax({
		type:'GET',
		url:'../../app/register.php?' + data,
		dataType: 'json',
		success: function(ret) {
			$.each(ret, function (i, v) {
				if (ret['code'] == 0) {
					$('#err').text("111111111");
					window.location.href='/views/signin.html';
				} else if (ret['code'] == 2) {
					$('#err').text(ret['msg']);
					window.location.href='/views/signin.html';
				} else {
					$('#err').text(ret['msg']);
				}
			});
			
		}
	});
}


function checkval(id, val, tp){
	// 用这样的方法写
	// swich $id
	// case name
		// 当id传name的时候这里写验证name的内容
		// 有问题return问题没问题return true
	// case phone
		// 这里写验证手机号的内容，下面以此类推
	// ....(同上)
	switch (id){
		case "uname":
			if (val == '') {
				$('#err').text("姓名不可为空");
				return false;
			}
			if (val.length>20) {
				$('#err').text("姓名不能超过20个字");
				return false;
			}
			return true;
		case "phone":
			if (val == '') {
				$('#err').text("手机号不可为空");
				return false;
			}
			if (val.length!=11) {
				$('#err').text("请输入正确的手机号");
				return false;
			}
			var reg = /^(((1[0-9]{2}))+\d{8})$/;
			if(!val.match(reg)){
				$('#err').text("请输入正确的手机号");
				return false;
			}
			return true;
		case "password":
			if (val == '') {
				$('#err').text("密码不可为空");
				return false;
			}
			if (val.length>=15 || val.length<=5) {
				$('#err').text("密码长度为5~15");
				return false;
			}
			return true;
		case "tpassword":
			if (val !== tp) {
				$('#err').text("两次输入的密码不一致");
				return false;
			}
			return true;
		case "email":
			if (val == '') {
				$('#err').text("邮箱地址不可为空");
				return false;
			}
			var reg = /\w+[@]{1}\w+[.]\w+/;
			if (!reg.test(val)) {
				$('#err').text("请输入正确的邮箱地址");
				return false;
			}
			return true;
		case "code":
			if (val == '') {
				$('#err').text("验证码不可为空");
				return false;
			}
			if (val != tcode) {
				$('#err').text("验证码错误");
				return false;
			}
			return true;
		default:
			return false;
	}
}

//登录页面的验证
function checkname(){
	var username = $('#username').val();
	
	if (username == '') {
		$('#pro').html('请输入您的用户名');
	}else{
		$('#pro').html('');
	}
}
function checkPassword(){
	var upwd = $('#upwd').val();
	if (upwd == '') {
		$('#pro').html('请输入您的密码');
	}else{
		$('#pro').html('');
	}
}

//登录
$('#sub').click(function(){
	var username = $("[name='username']").val();
	var upwd = $("[name='upwd']").val();
	$.ajax({
		type:"GET",
		url:"../../app/signin.php",
		data:{'username':username, 'upwd':upwd},
		success:function(ret){
			$.each(ret, function (i, v){
				if (ret['code'] == 0) {
					$('#pro').html('登录成功');
					window.location.href='/views/welcome.html'
				}else{
					$('#pro').html(ret['msg']);
				};
			});
		}
	});
});