## git 基础
### git init
> 初始化一个项目
- syntax
```bash
git init [option]
```
### git clone
> 克隆一个仓库
- syntax
```bash
# 从一个 git 地址中克隆一个，可选重命名
git clone <url> [<name>]
```
- example
```bash
# 克隆一个仓库，并重命名为 temp
git clone https://gitee.com/liuwenwu520/te temp
```
### 检查当前文件状态
- syntax
```bash
git status
```
### 查看提交历史
- syntax
```bash
git log [option]
```
- option
```bash
-p, -patch  显示每次提交所引入的差异（按 补丁 的格式输出）
-num  限制显示的日志条目数量，如 -2 选项来显示最近的两次提交
--stat  展示每次提交的简略统计信息
--pretty  
```
- example
```bash
git log --pretty=format:"%h - %an, %ar : %s"
```

