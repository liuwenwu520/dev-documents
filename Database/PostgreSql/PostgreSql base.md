## psql登录
windows需要配置环境变量
```sh
## 获取帮助
psql --help
## linux
sudo -h 192.168.22.1 -p 6543 -u postgres psql
## windows
psql -h 127.0.0.1 -p 6543 -U username -W
```
