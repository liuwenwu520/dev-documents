## 文件，文件夹，删除命令
### mkdir 创建文件夹命令
- syntax
```bash
mkdir [option] directory
```
- option
```bash
-p  连续创建多层目录（若文件夹已存在则忽略）
-v  显示创建的过程
```
- example
```bash
# create a directory
mkdir dir
```
### touch 创建文件名称
- syntax
```bash
touch [option] [file]
```
- example
```bash
# create a file
touch xx.txt
```
### rm 删除文件文件夹
- syntax
```bash
rm [option] file
删除普通文件并提示确认信息：rm 文件名
删除普通文件或目录文件，不提示：rm -rf 文件或目录名
```
- option
```bash
-f, --force         忽略不存在的文件进行删除，忽略警告信息
-i, --interactive   删除前先询问
-r, -R,--recursive  递归删除文件夹以及文件夹下的所有内容
-rf                 合并上面的两个选项
-d, --dir           删除所有的空文件夹 
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
### cp 复制文件或目录 copy
- syntax
```bash
cp [option] sourceFile targetFile
复制命令的三种情况：
    目标文件是一个目录，会将源文件复制到该目录中。
    目录文件是一个文件，会将源文件覆盖该文件。
    目标文件不存在，将会复制源文件并修改为目标文件的名称（重命名）。
```
- option
```bash
-f, --force         如果一个已存在的目标文件不能被打开，删除它并重试
-p, --preserve      保留原始文件的属性
-d,                 若对象为"连接文件"，则保留该"连接文件"的属性
-r, -R, --recursive 递归持续复制（用于目录)
-i, --interactive   若目标文件存在则询问是否覆盖
-a, --archive       相当于 -pdr (p,d,r 为上述的参数)
-v, --verbose       显示详细的进行步骤
```
- example
```bash
```
### mv 移动文件或改名 move
- syntax
```bash
mv [option] file [targetPath | targetFile]
```
- option
```bash
-f, --force         覆盖前不询问
-i, --interactive   覆盖前询问
-n, --no-clobber    不覆盖已存在文件
```
- example
```bash
# rename aaa to bbb
mv aaa bbb
```
### dd 指定大小的拷贝的文件或指定转换文件
- syntax
```bash
dd [parameter]
```


