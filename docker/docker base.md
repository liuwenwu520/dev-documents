## docker 配置
### # 配置镜像仓库
1. 配置文件位置
> linux  
vi /etc/docker/daemon.json
> windows  
c:\user\wenwu\.docker\daemon.json
2. 修改配置文件
```json
{
  "registry-mirrors": ["https://mirror.ccs.tencentyun.com", "http://hub-mirror.c.163.com", "https://3laho3y3.mirror.aliyuncs.com", "https://registry.docker-cn.com"],
  "insecure-registries": [],
  "debug": true,
  "experimental": false
}
```