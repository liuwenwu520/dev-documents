## 文件，文件夹，删除命令
### mkdir 创建文件夹命令
- syntax
```bash
mkdir [directory name]
# eg.
mkdir dir
```
### touch 创建文件名称
- syntax
```bash
touch [file name]
# eg.
touch xx.txt
```
### rm 删除文件文件夹
- syntax
```bash
rm [option] [file or directory]
```
- option
```bash
-f, --force 忽略不存在的文件进行删除
-r, -R,--recursive 递归删除文件夹以及文件夹下的所有内容
-rf 合并上面的两个选项
-d, --dir 删除所有的空文件夹 
```
- example
```bash
# 删除文件
rm -f [文件绝对地址，或者相对地址]
rm -f ./a.txt
rm -f /usr/a.txt
# 删除目录
rm -rf [文件夹绝对地址，或者相对地址]
rm -rf /home
rm -rf ./apps
```
