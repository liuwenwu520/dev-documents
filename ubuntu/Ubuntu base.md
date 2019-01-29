- 获取管理员权限
```sh
sudo su
```
- 文件颜色说明
```
白色：表示普通文件       
蓝色：表示目录
绿色：表示可执行文件
红色：表示压缩文件
浅蓝色：链接文件
红色闪烁：表示链接的文件有问题
黄色：表示设备文件
灰色：表示其他文件
```
- 获取所有文件和文件夹名
```sh
ls
## 获取帮助
ls --help 
```
- 一个文件一行列出所有文件夹和文件夹名
```sh
ll 相当于 ls -l
```
- 安装命令
```sh
sudo apt-get install [service-name]
```
- 移除命令
```sh
sudo apt-get autoremove [service-name]
```
- 查看已安装程序
```sh
dpkg
```
### 关机和重启
ubuntu重启、关机命令
```
重启命令 ： 
1、reboot 
2、shutdown -r now 立刻重启
3、shutdown -r 10 过10分钟自动重启
4、shutdown -r 20:35 在时间为20:35时候重启
如果是通过shutdown命令设置重启的话，可以用shutdown -c命令取消重启 

关机命令 ： 
1、halt   立刻关机（一般加-p 关闭电源）
2、poweroff 立刻关机 
3、shutdown -h now 立刻关机
4、shutdown -h 10 10分钟后自动关机 
如果是通过shutdown命令设置关机的话，可以用shutdown -c命令取消关机
``` 
### 端口查看和配置
lsof(list open files)是一个列出当前系统打开文件的工具。  
在linux环境下，任何事物都以文件的形式存在，通过文件不仅仅可以访问常规数据，还可以访问网络连接和硬件。  
所以如传输控制协议 (TCP) 和用户数据报协议 (UDP) 套接字等，系统在后台都为该应用程序分配了一个文件描述符，无论这个文件的本质如何，该文件描述符为应用程序与基础操作系统之间的交互提供了通用接口。  
因为应用程序打开文件的描述符列表提供了大量关于这个应用程序本身的信息，因此通过lsof工具能够查看这个列表对系统监测以及排错将是很有帮助的。  
```sh
# 用以显示符合条件的进程情况，lsof(list open files)是一个列出当前系统打开文件的工具。
lsof -i
lsof -i:端口号
lsof输出各列信息的意义如下：
Command：进程的名称       PID：进程标识符
User：进程所有者          FD：文件描述符，应用程序通过文件描述符识别该文件。如cwd、txt等
TYPE：文件类型，如DIR、REG等 DEVICE：指定磁盘的名称
SIZE：文件的大小          NODE：索引节点（文件在磁盘上的标识）
NAME：打开文件的确切名称
# netstat
netstat -tunlp
netstat -tunlp|grep 端口号
# 关闭程序
kill -9 pid
```
