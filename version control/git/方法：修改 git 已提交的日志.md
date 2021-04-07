## 修改 git 已提交的日志
### 情况一：最后一次提交且未push
> git会打开$EDITOR编辑器，它会加载这次提交的日志，这样我们就可以在上面编辑，编辑后保存即完成此次的修改。
```
git commit --amend
```
### 情况二：最后一次提交且已push到服务器
> 和情况一的做法一样。使用push推送到远程服务器是需要加上--force，让服务器更新历史记录。  
> 需要注意的是：把修改后的日志强制push到Git服务器，如果别人本地的副本有修改，很有可能会导致他们同步不了，所以最好和他们核对下。
```
git commit --amend
git push origin master --force
```
### 情况三：旧的提交且未推送
假设commit是倒数第3次提交，这个可以使用git log查看  
```
git log
```
执行rebase,
```
git rebase -i HEAD~3
```
它会打开一个编辑器，它会把最后前3次的提交显示出来，类似于
```
pick 94fc8fe 添加内容a
pick 04f0d18 添加内容c
pick b1b451d 添加内容d
```
你会看到，它是按提交的顺序显示的，与git log显示的顺序相反。定位到你要编辑日志的那一行，把pick修改为edit，然后保存。  
接着就是修改日志内容了
```
git commit --amend
```
完成编辑日志后，记得执行：
```
git rebase --continue
```
Rebase目的是打开提交的历史记录，让您选择要修改的内容。 Git会让你在一个新的分支修改内容。 git rebase --continue则是让你重新回到之前的分支。
### 情况四：旧的提交且已push到服务器
前面编辑日志的操作是和情况三是一样的：
```
git rebase -i HEAD~X
git commit --amend
git rebase --continue
```
X表示倒数第几次提交。  
完成编辑日志后，执行push：
```
git push origin master --force
```
