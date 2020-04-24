## Zuul 使用
### 添加依赖
- gradle
```kt
extra["springCloudVersion"] = "Hoxton.SR3"

dependencies {
    implementation("org.springframework.cloud:spring-cloud-starter-netflix-zuul")
}

dependencyManagement {
    imports {
        mavenBom("org.springframework.cloud:spring-cloud-dependencies:${property("springCloudVersion")}")
    }
}
```
### 配置
application.yml
```yaml
zuul:
  # 忽略头部 
  ignored-services: '*'
  # 路由
  routes:
# hystrix 超时
hystrix.command.default.execution.isolation.thread.timeoutInMilliseconds: 6000
# 负载均衡超时
ribbon:
  # 读取超时
  ReadTimeout: 60000
  # 连接超时
  ConnectTimeout: 3000
```
### 启用 Zuul
```
# 入口类上加注解
@EnableZuulProxy
```