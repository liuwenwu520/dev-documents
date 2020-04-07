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
- 创建运行容器组合
```
# 进入到 docker-compose.yml 文件所在目录
docker-compose up -d
```