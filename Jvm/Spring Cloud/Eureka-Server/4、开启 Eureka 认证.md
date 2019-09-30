## 开启 Eureka 认证
1. 添加 spring security 依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```
2. 配置用户名和密码
> appliction.yml 文件
```yml
spring:
  security:
    user:
      name: admin
      password: 123
```
3. Eureka 中的使用