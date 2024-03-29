## 分支和标签

### 切换分支（新）
> 2.23 版本  
> 将会替换 checkout 中的 切换分支 功能
- syntax
```bash
git switch <branch>
```
### 创建并切换分支（新）
> 2.23 版本  
- syntax
> 替换 checkout 中的 创建并切换分支 功能
```bash
# 创建并切换到分支
git switch -c <new-branch>
# 创建并切换到分支，如果分支存在则会重置分支
git switch -C <new-branch>
```
### 创建分支
- syntax
```bash
git branch <"branch name">
```
### 删除分支
- syntax
```bash
git branch -d <branchname>
```
### 查看当前所有分支列表
- syntax 
```bash
git branch [<options>]
```
- options
```bash
-v  查看每一个分支的最后一次提交
--merged  查看哪些分支已经合并到当前分支
--no-merged  查看所有包含未合并工作的分支
```
### 分支切换（旧）
> 使 HEAD 指针指向指定分支
- syntax
```bash
git checkout [<branch>]
```
### 创建新分支的同时切换过去（旧）
- syntax
```bash
git checkout -b <newbranchname>
```
