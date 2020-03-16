## 撤销
### 撤销暂存的文件
> 将状态从暂存改为已修改未暂存
- syntax
```bash
git reset HEAD <file>...
```
- example
```bash
git reset HEAD CONTRIBUTING.md
```
### 撤销对文件的修改
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