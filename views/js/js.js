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
		url:'/app/register.php?' + data,
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
// // checkval(name, 111);
// /*
// function register(){
// 	// 在这里获取到input的字段后调用checkval（name（相对应的input）， val（相对应的获取到的内容））
// 	// 然后判断checkval返回的值，例如：if（checkval === true）{输入没问题} else {取checkval返回值来提示}
// 				// var id = $(this).attr('id');
// 				// var val = $(this).val();
// 				// checkval(id,val);
// 				// if (checkval === ture) {
// 				// 	$('#err').html('');
// 				// }else{
// 				// 	$('#err').html();		
// 				// };
// 	var sub= $('#formTest').submit(function(){
// 		$.ajax({
// 			url:'data/register.php',
// 			type:'GET',
// 			dataType:'json',
// 			data:sub.serializeArray(),
// 			success:function(){
// 				alert('')
// 			}
// 		});
// 	});
// }
// */
// /*
// function signin(){
// 	$('#signIn').ready(function(){
// 		$('#sub').on('click',function({
// 				$.ajax({
// 					url:'data/signIn.php',
// 					type:'GET',
// 					data:{'username':'$("#username").val()','upwd':'$("#upwd").val()'},
// 					success:function(txt){
// 						if (txt===err) {//用户名密码错误
// 							$('#pro').html('用户名和密码有问题');
// 						}else{//登录成功
// 							$('pro').html('欢迎回来'+uname);
// 						};
// 					}
// 				});
// 			});
// 		);
// 	});
// }
// */

