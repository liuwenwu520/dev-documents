## compose file 
> 用于 docker-compose 或者 docker stack  
statck.yml
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