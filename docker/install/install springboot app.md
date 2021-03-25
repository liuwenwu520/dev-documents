## 在 docker 中安装 springboot 应用
### 制作 Dockerfile 文件，作为镜像
./Dockfile
```
FROM adoptopenjdk:8-jdk-hotspot
VOLUME /tmp
RUN mkdir /opt/app
# 我们省略 jar 包，使用 volumes 的方式
# COPY gssb-admin.jar /opt/app
EXPOSE 8080
# 此命令用于在容器中启动 springboot 应用，注意包名和端口
CMD ["java", "-jar", "/opt/app/gssb-admin.jar", "-Dfile.encoding=utf-8", "--server.port=8080"]
```
### docker compose 文件
./docker-compose.yml
```yml
version: "3"
services:
  web-server:
    container_name: gssb-web-server
		# 这里使用我们编写的 Dockerfile 文件构建镜像
    build:
      context: .
      dockerfile: Dockerfile
		# 这里使用卷积，卷积中存放了 jar 包，注意与 dockerfile 中位置保持一致性
    volumes:
      - ./data:/opt/app
	  # 这里与 dockerfile 中的启动命令端口中的配置需要一致
    ports:
      - 8802:8080
```