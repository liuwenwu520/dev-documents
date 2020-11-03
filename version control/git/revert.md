## 撤销
### 撤销暂存的文件
> 将状态从暂存改为已修改未暂存
- syntax
```bash
git reset HEAD <file>...
```
- options
```
--hard <commit id>  将指针指向指定版本
```
- example
```bash
git reset HEAD CONTRIBUTING.md
git reset --hard a906b4ecdc2a8f9dfbac3b4bce326dd916a4785e
```
### 恢复文件状态（新）
> git 2.23以上
> 恢复文件的状态，不会对工作文件进行更改
- syntax
```bash
# 恢复指定路径
git restore [<options>] <pathspec>
```
- options
```bash
-s <tree>
--source=<tree>  用给定树的内容恢复工作树文件用给定树的内容恢复工作树文件  

-W, --worktree  指定恢复的位置
-S, --staged  指定恢复的位置, 可恢复暂存的文件
```
- example
```bash
# 恢复所有 .c 文件
git restore '*.c'
# 恢复当前文件夹
git restore .
```
### 恢复（旧）
- syntax
```bash
git checkout -- <file>...
```
- example
```bash
git checkout -- CONTRIBUTING.md
```
### 撤销指定的提交
- syntax
```bash
git revert <commit>
```