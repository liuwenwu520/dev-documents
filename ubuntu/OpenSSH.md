### # 查看当前的ubuntu是否安装了ssh-server服务
默认只安装ssh-client服务
```sh
dpkg -l | grep ssh
```
### # 安装ssh-server服务
```sh
sudo apt-get install openssh-server
```
### # 然后确认ssh-server是否启动了
```sh
ps -e | grep ssh
```
如果看到sshd那说明ssh-server已经启动了  
如果没有则可以这样启动：sudo /etc/init.d/ssh start或sudo service ssh start
配置相关：   
ssh-server配置文件位于/etc/ssh/sshd_config，在这里可以定义SSH的服务端口，默认端口是22，你可以自己定义成其他端口号，如222。（或把配置文件中的”PermitRootLogin without-password”加一个”#”号,把它注释掉，再增加一句”PermitRootLogin yes”） 
然后重启SSH服务：   
```sh
sudo /etc/init.d/ssh stop   
sudo /etc/init.d/ssh start  
```
