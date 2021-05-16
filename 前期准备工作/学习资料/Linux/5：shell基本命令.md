sudo -s : 提升为root用户  

# BASH特性

按一次tab键补全文件名            
按两次列出所有可能性（对命令也适用）  
 
通配符（类似于正则表达式）：  
*：任意长度字符串  
？：一个字符  
[ ] ：所有出现在方括号里的字符  
-：指定字符集范围  
 
EX：ls text[A-Z]
 
# 基本命令

pwd : 显示当前位置

cd path :  进入目录  
cd .. : 退回上一目录  
cd : 进入用户主目录  

ls : 列出目录下所有文件和子目录  
ls -F : 名字后面加上后缀，表示其类型  
ls -a : 显示隐藏文件  
ls -l : 显示文件属性  
ls -ld : 显示目录属性  
ls path : 显示指定目录里的内容  

dir == ls  
vdir == ls -l  

cat filename : 查看文件内容  
cat -n filename : 显示行号  
more filename : 一页一页显示文件（空格翻页，回车跳行）  

head ：阅读文件开头  
tail ：阅读文件结尾

less ：高级阅读命令  
-M ：底部显示文件更多信息  
空格翻页，B键回翻  
/text ：文中搜索text并高亮  
Q键退出  

grep text filename : 在文件中搜索出现关键词的行（可以多个文件中找）  
text可以为正则表达式  

find path -name name -print ：指定文件夹中找文件（name可以是正则表达式带引号）  
-type ： 定位特殊文件类型  
-atime ：最后一次使用时间  
-mtime ：最后一次修改时间  


shell中运行程序：输入程序名  
后面加上&，可以保持终端继续运行  

whereis ：查找程序文件位置  
-b ：只显示二进制可执行文件  

who ：查看所有登录用户  
whoami ：我是哪个用户  
uname ：当前系统版本信息  
-a ：所有信息  
-r ：内核版本信息  

man order ：查看命令帮助信息（用less程序显示）  

whatis order ：命令简介  
apropos text ：根据text反查命令
