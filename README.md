# ces
# 开发域名：dev.ces.com
邮件点击phpstudy配置站点，新增后生成配置，然后到c盘windows->system32->drivers->etc下，把hosts文件复制到桌面，使用编辑器打开，在最下行新起一行写上127.0.0.1    dev.ces.com
然后覆盖原来的文件重启nginx即可用该域名访问。

域名如果可以正常访问的话页面会显示php版本信息页,之后右键点击phpstudy选择phpmyadmin,然后用户名和密码都输入root尝试能否登陆,如果可以登陆就在浏览器访问dev.ces.com/CreateDB.php,看到DB Created!说明执行成功,即可开始下面的工作,否则说明数据库创建失败,请查明原因或拿错误提示询问我.如果自己数据库用户名密码不是root,就打开etc/config.ini文件,修改user(用户名)或password(密码)为你当前数据库的用户名密码,之后保存再次尝试访问.

#API
1.注册
dev.ces.com/app/register.php
参数：name姓名/phone手机号/password密码/tpassword重复密码/email邮箱
要求:姓名长度<=20字/手机号=11位且必须是数字且首位数为1/密码长度<=15位/重复密码与密码一致/邮箱长度<=50且必须是正确的邮箱格式
请求:GET请求
返回:格式json
正确时code:0 msg:内容
错误时code:1 msg:错误内容

2.登陆
dev.ces.com/app/signin.php
参数：phone手机号/password密码
要求:手机号=11位且必须是数字且首位数为1/密码长度<=15位
请求:GET请求
返回:格式json
正确时code:0 msg:内容
错误时code:1 msg:错误内容

#要求：
登陆正确时弹出一个浮动窗口（不是alter，用jq控制一个页面弹出对话框），内容是一句话：欢迎您，name。您的密码是password，邮箱是email，用户名是phone，注册时间是create_at.下方有一个关闭对话框的按钮,点击后关闭.

注册成功后弹出提示框(不是alter)内容是:注册成功,5秒后跳转到登录页.(倒计时5秒后跳转到登录页,倒计时要显示出来)