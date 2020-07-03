## gitlab compose file
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
      # - gitlab-data:/var/opt/gitlab
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        # 用于配置仓库地址复制时展示的 ip 、端口和协议
        external_url "http://127.0.0.1:8800"
# volumes:
#   gitlab-data:
    # driver: tt
    # name: gitlab-data
```