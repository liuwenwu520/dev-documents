## Nginx 变量
### 创建变量和设置变量
> Syntax: set name value;
```
# 设置一个 $flag 变量
set $flag 0;
```
### 请求头部 header
> 使用 $http_xxx 方式，xxx 将头部字段改成下划线分割的小写字母格式
```
eg.
User-Agent  $http_user_agent
Content-Type $http_content_type
Origin  $http_origin
```
