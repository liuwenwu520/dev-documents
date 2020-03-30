## 远程仓库的使用
### 查看远程仓库
- syntax
```bash
git remote [<options>]
```
- options
```bash
-v  显示远程仓库名称和 url
```
### 添加远程仓库
> 添加一个新的远程 Git 仓库，同时指定一个方便使用的简写
- syntax
```bash
git remote add <shortname> <url>
```
### 从远程仓库中抓取与拉取
> 访问远程仓库，从中拉取所有你还没有的数据, 不会修改工作目录中的内容  
> git fetch 命令只会将数据下载到你的本地仓库——它并不会自动合并或修改你当前的工作。 当准备好时你必须手动将其合并入你的工作。
- syntax
```bash
git fetch <remote>
```
### 推送到远程仓库
- syntax
```bash
git push [<options>] [<remote>] [<branch>]
```
- options
```
-u, --set-upstream  创建一个远程分支，并提交到远程分支（远程没有此分支）
```
- example
```bash
git push origin master
```
### 查看某个远程仓库
- syntax
```bash
git remote show [<options>] <name>
```
- options
```bash
-n  不查询远程
```
- example
```bash
git remote show origin
```
### 远程仓库的重命名与移除
- syntax
```bash
git remote rename <old> <new>
```
### 拉取并合并
> 查找当前分支所跟踪的服务器与分支，从服务器上抓取数据然后尝试合并入那个远程分支
- syntax
```bash
git pull [<options>] [<repository> [<refspec>…​]]
```
