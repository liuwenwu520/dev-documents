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
### 2.客户端安装与连接
- arcgis desktop 对应 32 位客户端
- arcgis server 对应 64 位客户端
```bash
1.下载客户端
https://www.oracle.com/database/technologies/instant-client/downloads.html

2.解压客户端
例如 C:\oracle\instantclient_12_2

3.添加目录到环境变量 PATH 中

4.创建文件夹
C:\oracle\instantclient_12_2\network\admin

5.创建 tnsnames.ora 文件
C:\oracle\instantclient_12_2\network\admin\tnsnames.ora

6.配置 tnsnames.ora 文件，主要是修改 HOST、PORT、SERVICE_NAME
ORCL =
  (DESCRIPTION =
    (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.162.129)(PORT = 1521))
    (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = ORCL))
  )
```


