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
docker-compose [-f <file>]... [<options>] [<COMMAND>] [<ARGS>..]
```
- options
```
-f, --file <file>  指定一个或多个 compose file 名称和路径
-p, --project-name <project_name>  指定项目名称（默认为父文件夹名称）
```
- example
```
docker-compose -f docker-compose.yml -f docker-compose.admin.yml run backup_db
```
### # up
> 构建、创建、重建、启动和分离容器
- syntax
```
up [<options>] [--scale SERVICE=NUM...] [SERVICE...]
```
- options
```
-d, --detach  分离模式：后台运行容器
```
- example
``` 
# 进入到 docker-compose.yml 文件所在目录
docker-compose up -d
```
### # down
> 停止容器并移除由 up 创建的容器，网络，卷积，和镜像
- syntax
```
down [<options>]
```
- options
```
-v, --volumns  移除声明在 volumes 中命名卷
```
### # ps
> 列出所有容器
- syntax
```
ps [optiions] [SERVICE...]
```
### # stop
> 停止运行的容器，不移除容器
- syntax
```
stop [options] [SERVICE...]
```
- opitons:
```
-t, --timeout <TIMEOUT>  指定一个关闭倒计时（秒），默认值：10s
```
### # start
> 启动存在的容器
- syntax
```
start [SERVICE...]
```

