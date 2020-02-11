## ln 软连接
### 软连接
- syntax
```bash
ln [option] target linkname
ln [option] target directory
ln [option] target
```
- option
```bash
-s, --symbolic  使用软连接代替硬连接
```
- example
```bash
ln -s [目标绝对地址/目录] [目录绝对地址]
ln -s /usr/local/nginx/sbin/nginx /usr/bin
ln -s [目标绝对地址] [连接名]
ln -s /usr/local/nginx/sbin/nginx /usr/bin/nginx
```