## nginx 常用配置记录
### nginx 配置代理 webpack 热加载
```
# 不要有后斜杠
location /sockjs-node {
    # 不要有后斜杠
    proxy_pass http://localhost:3000/sockjs-node;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";	
}
```