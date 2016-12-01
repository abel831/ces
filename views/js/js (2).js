function countDown(secs,surl){
	var jumpTo = document.getElementById('jumpTo');
	jumpTo.innerHTML = secs;
	if (--secs>0){
		setTimeout("countDown("+secs+",'"+surl+"')",1000);
	}else{
		location.href = surl;
	}
}
countDown(5,'../denglu/Landing_zhou2.html');

// 基本上这四个方法就足够了，jq取input的值不会自己查百度。ajax请求格式不会也百度，网上全都是。
// 按照这个写完了之后把你原来的都删掉，不要求好看，只要功能，你页面就写几个input都没关系，没用的别写。
// 有不会的就赶紧问，别一个劲儿的拖着，这点东西周四写完，你就百度着写，有俩仨小时足够。
// 首页放在html文件夹下，把css精简一下合成一个，这文件里的我写的注释不要动
// 都写完了之后自己注册登录都走几遍，然后在跟目录提交，先git add . 然后git commit -am ""  然后git fetch    git rebase origin/dev    git push origin dev

//这个方法写注册的表单提交
//先用jq接收到每个input填写的内容（字段名根据接口字段取）
// 然后ajax请求接口，把字段发送过去
// 最后在接受返回结果的时候判断(if (code = 1) ....提示注册成功然后倒计时跳转...else...提示失败(取msg内容jq输出到指定位置)....)
function register(){
	// 在这里获取到input的字段后调用checkval（name（相对应的input）， val（相对应的获取到的内容））
	// 然后判断checkval返回的值，例如：if（checkval === true）{输入没问题} else {取checkval返回值来提示}
}

// 同上,jq获取用户名和密码,ajax请求接口然后结果做判断
function signin(){}

// 写一个验证每个字段的方法，例如手机号必须是11位纯数字等等，自己看readme里面的要求去
// 在上面两个里面调用这个验证来验证字段
function checkval($id, $val){
	// 用这样的方法写
	// swich $id
	// case name
		// 当id传name的时候这里写验证name的内容
		// 有问题return问题没问题return true
	// case phone
		// 这里写验证手机号的内容，下面以此类推
	// ....(同上)
}

// 也可以单独写一个计时器跳转的方法，然后在注册成功的时候调用
function time（）{}