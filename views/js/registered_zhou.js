uname.onblur = function(){
	if (this.validity.valueMissing)
	{	
		var msg = '用户名不能为空';
		document.getElementById("err").innerHTML = msg;
		this.setCustomValidity(msg);
	}else if (this.validity.tooShort)
	{
		var msg = '用户名不得小于6位';
		document.getElementById("err").innerHTML = msg;
		this.setCustomValidity(msg);
	}else if (this.validity.tooLong)
	{
		var msg = '用户名不得大于12位';
		document.getElementById("err").innerHTML = msg;
		this.setCustomValidity(msg);
	}else{
		document.getElementById("err").innerHTML = '';
		this.setCustomValidity('');
	}
};
uPhone.onblur = function(){
	if (this.validity.valueMissing)
	{	
		var msg = '请填写您的手机号';
		document.getElementById("err").innerHTML = msg;
		this.setCustomValidity(msg);
	}else if (this.validity.patternMismatch)
	{
		var msg = '您输入的手机号不符合规范，请修改后再试';
		document.getElementById("err").innerHTML = msg;
		this.setCustomValidity(msg);
	}else{
		document.getElementById("err").innerHTML = '';
		this.setCustomValidity('');
	}
};
upwd.onblur = function(){
	if (this.validity.valueMissing)
	{
		var msg = '密码不能为空或中文，且长度在6到16位之间';
		document.getElementById("err").innerHTML = msg;
	}else if (this.validity.patternMismatch){
		var msg = '密码不能为空或中文，且长度在6到16位之间';
		document.getElementById("err").innerHTML = msg;
	}else{
		document.getElementById("err").innerHTML = '';
	}
};
$(function(){
	$('#confirm').blur(function(){
			if ($('#confirm').val()===$('#upwd').val())
		{
			$('#err').html('');
		}else{
			$('#err').html('您输入的密码不一致，请查询后再试');
		};
	});
});
