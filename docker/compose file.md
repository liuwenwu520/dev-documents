## compose file 
> 用于 docker-compose 或者 docker stack  
> 默认文件名 docker-compose.yml
```
version: "3.7"
services:
  webapp:
    build: ./dir
```
### # version
> 版本
### # build
> 在构件时应用的配置选项
### # services
> 多个容器列表
- image
镜像
```
image: postgres:11
```
- container_name
容器名称，使用 docker stack deploy 此项会被忽略
```
container_name: my-web-container
```
- ports
暴露端口
```
ports:
  - "3000"
  - "3000-3005"
  - "8000:8000"
  - "9090-9091:8080-8081"
  - "49100:22"
  - "127.0.0.1:8001:8001"
  - "127.0.0.1:5000-5010:5000-5010"
  - "6060:6060/udp"
  - "12400-12500:1240"
```
- environment
环境变量
```
environment:
  RACK_ENV: development
  SHOW: 'true'
  SESSION_SECRET:
-----------------------
environment:
  - RACK_ENV=development
  - SHOW=true
  - SESSION_SECRET
```