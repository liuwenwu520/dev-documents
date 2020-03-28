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