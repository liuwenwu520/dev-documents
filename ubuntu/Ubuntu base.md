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
