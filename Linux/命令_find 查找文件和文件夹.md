### find 查找文件和文件夹
- syntax
```bash
find [path] [options]
```
- options
```bash
-name string  匹配名称，使用*作为通配符
```
- example
```bash
查找当前目录下的所有以 node 开头的文件文件夹
find . -name "node*"
```
-prune 排除文件夹
```bash
# 查询 a.txt 排序文件夹 ./abc
find . -path ./abc -a -prune -o -name a.txt -print
```
