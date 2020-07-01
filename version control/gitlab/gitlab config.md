## gitlab 配置
### gitlab 配置仓库ip
1. gitlab 配置文件  
vim /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml  
```yml
production: &base
  gitlab:
    # 配置 host
    host: 127.0.0.1
    port: 80
    https: false
```
2. 重启 gitlab
```bash
gitlab-ctl restart
```