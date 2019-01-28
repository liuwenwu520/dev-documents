- 获取管理员权限
```
sudo su
```
- 防火墙
```
// 开启防火墙
sudo ufw enable
// 关闭防火墙
sudo ufw disable
// 关闭所有外部对本机的访问
sudo ufw default deny
// 防火墙状态
sudo ufw status
// 开启/禁用相应端口服务
// 允许外部访问80端口
sudo ufw allow 80
// 禁止外部访问80端口
sudo ufw delete allow 80
// 允许此ip访问所有的本机端口
sudo ufw allow from 192.168.1.1
// 进制外部访问smtp服务
sudo ufw deny smtp
// 删除上面建立的某条规则
sudo ufw delete allow smtp
// 要拒绝所有的TCP流量从10.0.0.0/8 到192.168.0.1地址的22端口
sudo ufw deny proto tcp from 10.0.0.0/8 to 192.168.0.1 port 22
```
- 安装防火墙
```
sudo apt-get install ufw
```
