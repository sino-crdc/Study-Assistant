写Shell脚本的编辑工具：gedit、vim等  

运行Shell脚本前需要加上可执行权限：chmod +x file  

每个Shell脚本第一行最好写上脚本运行环境，例如：  
#！ /bin/bash

‘#’表示一行注释  

echo表示标准输出，输出到显示器上。输出末尾自动加换行

字符串用双引号括起来  

./filename : 运行脚本

# 变量与运算符  

shell中使用的变量不需要事先声明  
取变量值时，需要在变量名前面加上‘$’符号（EX：$a）  
变量只在其所在的脚本中有效。但用source运行一个脚本可让其中的变量强行在父Shell中可见  
export Variable ：可让变量在子Shell环境中可见    
unset variable ：手动注销一个变量  
\ : 转义字符（同c）  
{} ：限定一个变量的开始和结束  

位置变量 ：存放传递给脚本的参数  
$0 : 存放脚本名字  
$1,$2,$3... : 分别表示第一个参数，第二个参数，第三个参数。。。
$*/$@ : 参数列表  
$# : 参数的个数  

" " ：阻止Shell对大多数特殊字符的解释（除了$,`,"这三个符号）  
'' : 阻止Shell对所有字符的解释  
`` : 被倒引号括起来的命令会被执行，执行后的输出结果作为这个表达式的值。其中的特殊字符一般会解释  

Shell中的运算符与C基本相同  
bash中只能做整数运算，小数当作字符串  

表达式求值：  
1. $[] : 方括号内的表达式求值，可用“base#”指示进制  
EX：$[2+1]或$[2#10+1]  
2. expr : 后面跟表达式（数与符号之间要有空格）  
EX：expr 2 + 3   
3. let : 后面跟表达式  
EX：let num=$num+1  

# 脚本执行命令和控制语句  

## if选择结构(同c)
if ...  
then  
&nbsp;&nbsp;&nbsp;&nbsp;...  
elif ...  
then  
&nbsp;&nbsp;&nbsp;&nbsp;...  
else  
&nbsp;&nbsp;&nbsp;&nbsp;...  
fi

## case多选结构(同c) 
case ... in  
&nbsp;&nbsp;&nbsp;&nbsp;...)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...(command)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;;（双分号类似于break）  
&nbsp;&nbsp;&nbsp;&nbsp;...)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...(command)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;;  
&nbsp;&nbsp;&nbsp;&nbsp;*)（这一项类似于default）  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...(command)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;;  
esac  

if语句本身不执行判断，它接受一个程序名作为参数，根据程序的返回值进行判断：**0为真，非0为假**  

条件测试命令：[ ... ] / test ... (符号命令与变量之间必须有空格)  

## 字符串比较选项  
-z str : str长度为0时返回真  
-n str : str长度大于0时返回真  
str1 = str2 : 相等时为真  
str1 != str2 : 不等时为真  

字符串变量使用时最好加上引号  

## 文件测试选项  
EX：[ -x /sbin/unconfigured.sh ] (该文件存在且可执行时返回真)  

## 数字比较（只能比较整数）  
-eq : 相等  
-ne ：不等  
-lt ：小于  
-le ：小于等于  
-gt ：大于  
-ge ：大于等于  
EX：[ $status -eq 0 ]  

## 复合表达式  
! : 非  
-a : 与  
-o ：或  
&& 与 || 也可以用于复合表达式，不过连接的是两个test表达式语句  

## while循环 
while ...  
do  
&nbsp;&nbsp;&nbsp;&nbsp;...  
done  

## until循环（同c的do-while）
until ...  
do  
&nbsp;&nbsp;&nbsp;&nbsp;...  
done  

## for循环  
for ... in ...（list）
do  
&nbsp;&nbsp;&nbsp;&nbsp;...  
done 

## 读取用户输入 
read variable1 variable2 ... : 读取输入，并分别赋予这几个变量（类c）  
read ：没有变量作为参数，读取信息放在REPLY中  
read可用于暂停程序，等用户输入后再继续游戏  

## 脚本执行命令  
exit num ：强行退出一个脚本，并返回一个整数值  

trap 'command'/"command" signal : 接受到signal信号之后执行command操作  
trap也可用于忽略某个信号（command为空）  
trap语句会在程序运行时一直监测

## 命令表
a && b : a命令返回0（或执行成功）时执行b  
a || b ：a命令返回非0（或执行失败）时执行b  
a; b : 顺序执行，先a后b  

## 常用编程工具  
cut : 从输入行中提取指定的部分  
-c ：选取指定范围的字符  
-f : 选取指定字段  
-d ：指定字段的分割符  
EX：cut -d" " -f2 city.txt : 选取文件每一行中的第二个字段（字段以空格分开）  

diff file1 file2 : 确定两个版本的源文件中有哪些不同  

sort ：接受输入的行，并按首字母顺序排列  
-r ：降序排  
-k ：指定字段排序

uniq ：从已拍好序的输入中删除重复的行，输出结果  
EX：sort city.txt | uniq  

tr : 按用户指定方式对字符进行替换，并输出  
EX：tr “ABH” “HCA” < alph.txt : 将文件中所有的A转化为H，所有的B转化为C，所有的H转化为A  

wc file ：统计文件中的行、单词与字节数  
-c : 字节数  
-l ：行数  
-L ：最长一行的长度  
-w ：单词数  

substr ：从字符串中提取一部分。接受三个参数：字符串，开始位置（从1开始计数），提取的字符数  
这是一个运算符，需要用expr求值  
EX：expr substr "Hello World" 1 5

seq ：产生整数列  
seq 3 : 生成数列1 2 3  
seq -1 3 : 生成数列-1 0 1 2 3   
seq 9 -3 0 : 生成数列9 6 3 0（-3为步长）  

# Shell定制  
printenv ：查看shell环境变量  

搜索路径（PATH） ： 告诉shell在哪寻找要执行的命令程序  
修改PATH：PATH=$PATH:newpath(只在当前shell中修改，关掉后不保存)     

alias ：创建命令的别名  
（系统关闭后不保存修改）  

~/.bashrc : 存放各种环境变量，用户登录后自动运行，修改后不会消失  







