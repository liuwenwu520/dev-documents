## Ubuntu 命令
### 基础命令
```shell
# 获取管理员权限
sudo su
# 安装包命令
dpkg [<option> ...] <command>
# 查看服务
service < option > | --status-all | [ service_name [ command | --full-restart ] ]


```
### 文件命令
```shell
# 文件搜索 正则表达式匹配
grep [OPTION]... PATTERN [FILE]...
Search for PATTERN in each FILE.
Example: grep -i 'hello world' menu.h main.c
```

### 用户命令
```shell
# sudo 命令，执行另一个用户的命令
sudo - execute a command as another user
# 切换超级用户
sudo su
su
# 切换用户
su [username]
# 设置用户密码
# root 账户下
sudo passwd [username]
# 设置本账户密码
passwd
```