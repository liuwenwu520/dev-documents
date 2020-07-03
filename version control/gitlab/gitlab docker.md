## gitlab compose file
> 说明  
1. external_url 用于配置仓库地址复制时展示的 ip 、端口和协议，并且会配置 nginx 的 端口为设置端口
2. 使用第二个 nginx['listen_port'] 来重新配置nginx端口
3. /var/opt/gitlab 在 windows 中直接挂载会因为权限问题导致失败
```yml
version: '3.6'
services:
  gitlab-server:
    image: gitlab/gitlab-ce
    restart: always
    container_name: "gitlab-server"
    ports:
      - "8800:80"
      - "8801:443"
      - "8802:22"
    volumes:
      - ./data/etc/gitlab:/etc/gitlab
      - ./data/var/log/gitlab:/var/log/gitlab
      # - ./data/var/opt/gitlab:/var/opt/gitlab
    environment:
      GITLAB_OMNIBUS_CONFIG: |     
        external_url "http://127.0.0.1:8800"
        nginx['listen_port'] = 80
```