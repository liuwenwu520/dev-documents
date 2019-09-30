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
3. 关闭 security 中的 csrf 保护
```
@EnableWebSecurity
class WebSecurityConfig : WebSecurityConfigurerAdapter() {
    override fun configure(http: HttpSecurity?) {
        http as HttpSecurity
        http.csrf().disable()
    }
}
```
4. Eureka 客户端中使用
> 客户端 application.yml 文件
> 添加用户名和密码前缀
```yml
eureka:
  client:
    service-url:
      defaultZone: http://name:password@localhost:8201/eureka/
```