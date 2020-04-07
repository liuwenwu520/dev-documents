## Docker-Compose 基础
### # 安装 Docker Compose
> docker desctop 会自动安装
```
# install docker-compose
pip install docker-compose -i https://mirrors.aliyun.com/pypi/simple/

# 如果pip不存在，可以尝试
sudo yum install python-pip 
sudo pip install --upgrade pip
```
### # 命令
- syntax
```
docker-compose [-f <arg>...] [options] [COMMAND] [ARGS..]
```
- options
```
-f  指定一个或多个 compose file 名称和路径
-p <project_name>  拽定项目名称
```
- example
```
docker-compose -f docker-compose.yml -f docker-compose.admin.yml run backup_db
```
- 创建运行容器组合
```
# 进入到 docker-compose.yml 文件所在目录
docker-compose up -d
```