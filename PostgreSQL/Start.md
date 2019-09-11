
### 1 Install PostgreSQL from Linux

### 2 Uninstall PostgreSQL for Linux
- 删除相关安装
```shell
sudo apt-get --purge remove postgresql\*
sudo apt-get autoremove
sudo apt-get
```
- 删除配置及文相关件
```shell
sudo rm -r /etc/postgresql/
sudo rm -r /etc/postgresql-common/
sudo rm -r /var/lib/postgresql/
```
- 删除用户和所在组
```shell
sudo userdel -r postgres
sudo groupdel postgres
```