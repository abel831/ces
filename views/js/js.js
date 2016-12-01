function checkval(id, val){
	// 用这样的方法写
	// swich $id
	// case name
		// 当id传name的时候这里写验证name的内容
		// 有问题return问题没问题return true
	// case phone
		// 这里写验证手机号的内容，下面以此类推
	// ....(同上)
	var id = $('input').attr('id');
	switch (id){
		case uname:
			var val = $('#uname').val();
			if (val.length<=20) {
				console.log(1);
				return ture;
			}else{
				alert(2);
				return false;
			};
		case phone:
			var val = $('#phone').val();
			if (val.length==11) {
				return ture;
			}else{
				return false;
			};
		case password:
			var val = $('#password').val();
			if (val.length<=15) {
				return ture;
			}else{
				return false;
			};
		case tpassword:
			var val = $('#password').val();
			var val1 = $('#tpassword').val();
			if (val===val1) {
				return ture;
			}else{
				return false;
			};
		case email:
			var val = ('email').val();
			if (val &&  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(val)) {
				return ture;
			}else{
				return false;
			};
	}
}
checkval(name, 111);
/*
function register(){
	// 在这里获取到input的字段后调用checkval（name（相对应的input）， val（相对应的获取到的内容））
	// 然后判断checkval返回的值，例如：if（checkval === true）{输入没问题} else {取checkval返回值来提示}
				// var id = $(this).attr('id');
				// var val = $(this).val();
				// checkval(id,val);
				// if (checkval === ture) {
				// 	$('#err').html('');
				// }else{
				// 	$('#err').html();		
				// };
	var sub= $('#formTest').submit(function(){
		$.ajax({
			url:'data/register.php',
			type:'GET',
			dataType:'json',
			data:sub.serializeArray(),
			success:function(){
				alert('')
			}
		});
	});
}
*/
/*
function signin(){
	$('#signIn').ready(function(){
		$('#sub').on('click',function({
				$.ajax({
					url:'data/signIn.php',
					type:'GET',
					data:{'username':'$("#username").val()','upwd':'$("#upwd").val()'},
					success:function(txt){
						if (txt===err) {//用户名密码错误
							$('#pro').html('用户名和密码有问题');
						}else{//登录成功
							$('pro').html('欢迎回来'+uname);
						};
					}
				});
			});
		);
	});
}
*/

