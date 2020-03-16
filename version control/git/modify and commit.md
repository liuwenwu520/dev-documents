## 查看文件状态，跟踪文件, 忽略文件
### 检查文件当前状态
- syntax
```bash
git status [option]
```
- option
```bash
-s, --short  状态简览
```
### 跟踪文件
- syntax
```bash
git add <file>...
```
### 暂存已修改文件
- syntax
```bash
git add <file>...
```
### 忽略文件
- syntax
```bash
# 创建一个忽略文件
cat .gitignore
```
- example
```
# 在 .gitignore 文件中

# 忽略所有 .a 文件
*.a

# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```
### 比较当前文件和暂存快照之间的差异
- syntax
```bash
git diff [option]
```
- option
```bash
--staged  查看已暂存的将要添加到下次提交里的内容
--cached  查看已经暂存起来的变化
```
### 提交更新
- syntax
```bash
git commit [option]
```
- option
```bash
-m  将提交信息与命令放在同一行
-a  Git 就会自动把所有已经跟踪过的文件暂存起来一并提交
```
- example
```bash
git commit -m 提交测试
git commit -m "commit test"
```
### 移除文件
- syntax
```bash
git rm [option] <path|expression>
```
- option
```bash
-f  强制删除，删除之前修改过或已经放到暂存区的文件
--cached  从 Git 仓库中删除（亦即从暂存区域移除）,文件保留在当前工作目录中
```
- example
```bash
# 移除文件 PROJECTS.md
git rm PROJECTS.md

git rm --cached README

# 删除 log/ 目录下扩展名为 .log 的所有文件
git rm log/\*.log

# 删除所有名字以 ~ 结尾的文件
git rm \*~
```
### 移动文件
> 使用此命令会自动跟踪修改后的文件
- syntax
```bash
git mv <file_from> <file_to>
```
- example
```bash
# git mv 相当于
mv README.md README
git rm README.md
git add README
```





