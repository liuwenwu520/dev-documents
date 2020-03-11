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
git add <file>
```
### 暂存已修改文件
- syntax
```bash
git add <file>
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
