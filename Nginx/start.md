### install nginx
1. download nginx installer
> eg. nginx-1.16.1.tar.gz
2. extract nginx installer
3. 进入解压文件夹中
4. 运行配置
```bash
./configure
```
5. make and make install
```bash
make
sudo make install
```
6. nginx install location
location: /usr/local/nginx
7. use soft link
```bash
sudo su /usr/lcoal/nginx/bin/nginx /usr/bin/nginx
```
8. start
```bash
# 需要写入日志，必须使用管理员权限才能启动
sudo nginx
```