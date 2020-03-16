## 查看提交历史
### 查看提交历史
- syntax
```bash
git log [options] [<revision range>[[--] <path>...]]
```
- options
```bash
-p, -patch  显示每次提交所引入的差异（按 补丁 的格式输出）
-num  限制显示的日志条目数量，如 -2 选项来显示最近的两次提交
--stat  展示每次提交的简略统计信息
--pretty[=<format>]  漂亮打印 
--oneline  这是 "--pretty=oneline --abbrev-commit" 一起用的简写
--decorate  
```
- example
```bash
git log --pretty=format:"%h - %an, %ar : %s"
```
### 以列表方式查看提交文件的提交历史
- syntax
```bash
git blame <file>
```