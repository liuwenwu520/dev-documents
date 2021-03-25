## 在 docker 中安装 nginx
### docker compose 文件
./docker-compose.yml
```yml
version: "3"
services:
  web:
    container_name: gssb-web
    image: nginx
		# 在 templates 中放前端代码
		# 在 nginx.conf 文件中配置地址
    volumes: 
      - ./config/nginx.conf:/etc/nginx/nginx.conf
      - ./templates:/etc/nginx/templates
		# 在 nginx.conf 中配置的端口保持一致
    ports:  
      - 8800:8800
      - 8801:8801
```
### nginx 配置文件
./config/nginx.conf
```

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;
	
	server {
		listen	8800;
		server_name	localhost;
		
		location / {
			## 注意配置地址
			root ./templates/gssb_web;
			try_files $uri $uri/ /index.html;
			index index.html;
		}
		
		location /prod-api/{
			proxy_set_header Host $http_host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header REMOTE-HOST $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_pass http://85.157.48.154:8802/;
			client_max_body_size 100m;
		}
	}
	server {
		listen 8801;
		server_name	localhost;
		location / {
			root ./templates/gssb_app;
			try_files $uri $uri/ /index.html;
			index index.html;
		}
		
		location /api/ {
			proxy_set_header Host $http_host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header REMOTE-HOST $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_pass http://85.157.48.154:8802/;
			client_max_body_size 100m;
		}
	}
}

```