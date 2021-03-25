## 在 docker 中安装 mysql
### mysql问题
1. linux 中 mysql 默认区分大小写的
2. 如何进行自定义配置，配置 mysql 占用内存问题
3. 使用 swap 来解决云服务器内存不足的问题
### docker-compose 配置文件
docker-compose.yml
```yml
version: "3"
services:
  mysql-server:
    container_name: gssb-mysql-server
    image: mysql:8
    # --lower-case-table-names=1 忽略大小写命令
    command: --lower-case-table-names=1 --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: sczd1234
    volumes: 
		  # 配置存储数据位置
      - ./mysqldata/data:/var/lib/mysql
			# 自定义 mysql 初始化配置文件位置
      - ./mysqldata/config:/etc/mysql/conf.d
    ports:
      - 8700:3306
      - 8701:33060
```
### mysql 自定义配置文件
./mysqldata/config/myconifg.cnf
```
[mysqld]
# 经过测试，不用再这里声明忽略大小写
# lower_case_table_names=1
innodb_buffer_pool_size=50M
performance_schema_max_table_instances=400
table_definition_cache=400
table_open_cache=256
```