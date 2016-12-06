# hes
# 开发域名：dev.hes.com

* windows下：
右键点击phpstudy配置站点，新增后生成配置，然后到c盘windows->system32->drivers->etc下，把hosts文件复制到桌面，使用编辑器打开，在最下行新起一行写上127.0.0.1    dev.ces.com
然后覆盖原来的文件重启nginx即可用该域名访问。域名如果可以正常访问的话页面会显示php版本信息页,说明配置成功。

* linux下：
配好nginx，hosts。

# 项目结构：
App 后端文件夹，包含绝大部分php文件，后端开发基本上在此文件夹下，具体分类内容及要求查看相关文件夹下的readme.txt文件.

Public 公共目录文件夹,包含网站首页及其它一些公共的元素,除index.phg外其它内容应创建相应文件夹,详情见readme.txt

Html 除应该放到public下的内容外,前端的所有内容都在此完成,分成css,js,views.分别写相应的内容.所有的页面文件都写在views下.views下应自己分好类,创建不同的文件夹,以页面的位置及功能区分,不会的话问我,一定不能瞎写.

页面文件的命名:以小写单词命名,多单词以_分割，以.html结尾

etc 相关配置内容

setup 安装程序文件夹  例如数据库创建文件等php文件。
