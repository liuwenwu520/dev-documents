## 安装技巧
### 1.配置远程连接
1. 修改 tnsnames.ora 配置文件
> 配置文件位置 .\app\Administrator\product\11.2.0\dbhome_1\NETWORK\ADMIN\tnsnames.ora
```
# 添加以下到文件中
ORCL@192.168.1.11 = 
  (DESCRIPTION = 
    (ADDRESS = (PROTOCOL = TCP) (HOST = 192.168.1.11) (PORT = 1521))
    (CONNECT_DATA = (SERVER = DEDICATED) (SERVICE_NAME = ORCL))
  )
```
2. 重新启动数据库
```bash
# 登录数据库
sqlplus / as sysdba
# 关闭数据库
shutdown immediate
# 启动数据库
startup
```
