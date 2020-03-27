## Docker-Compose 基础
### # 安装 Docker Compose
```
# install docker-compose
pip install docker-compose -i https://mirrors.aliyun.com/pypi/simple/

# 如果pip不存在，可以尝试
sudo yum install python-pip 
sudo pip install --upgrade pip
```
### # docker-compose.yml 属性
- version
拽定 docker-compose.yml 文件的写法格式
- services
多个容器集合
- build
配置构建时，Compose 会利用它自动构建镜像，该值可以是一个路径，也可以是一个对象，用于指定 Dockerfile 参数
- environment
环境变量配置，可以用数组或字典两种方式
```
environment:
 RACK_ENV: development
 SHOW: 'true'
--------------------
environment:
 - RACK_ENV=development
 - SHOW=true
```
- env_file
从文件中获取环境变量，可以指定一个文件路径或路径列表，其优先级低于 environment 指定的环境变量
```
env_file: .env
---------------
env_file:
    - ./common.env
```
- expose
暴露端口，只将端口暴露给连接的服务，而不暴露给主机
```
expose:
    - "3000"
    - "8000"
```
- image
指定服务所使用的镜像
```
image: java
```
- ports
对外暴露的端口定义，和 expose 对应
```
ports:   # 暴露端口信息  - "宿主机端口:容器暴露端口"
- "8763:8763"
- "8763:8763"
```
- volumes
卷挂载路径
```
volumes:
  - /lib
  - /var
```