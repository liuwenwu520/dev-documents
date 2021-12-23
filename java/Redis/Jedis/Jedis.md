### 1. 添加Maven依赖
```xml
<!-- Redis 依赖 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
    <exclusions>
        <!--不依赖redis的异步客户端lettuce-->
        <exclusion>
            <groupId>redis.clients</groupId>
            <artifactId>jedis</artifactId>
        </exclusion>
        <exclusion>
            <groupId>io.lettuce</groupId>
            <artifactId>lettuce-core</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<!--引入 Redis 的客户端驱动jedis-->
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <!--<version>2.9.0</version>-->
</dependency>
```
### 2. 配置application.yml
```yml
spring
  redis:
    host: 127.0.0.1
    port: 6379
    database: 0
    password: 333
    timeout: 0ms
    # jedis pool
    jedis:
      pool:
        min-idle: 5
        max-active: 10
        max-idle: 10
        max-wait: -1ms
```
### 3. 配置工厂类
```kotlin
package org.wenwu.authentication.base.config

import org.springframework.boot.autoconfigure.data.redis.RedisProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import redis.clients.jedis.JedisPool
import redis.clients.jedis.JedisPoolConfig

@Configuration
class JedisPoolFactory(val properties: RedisProperties) {
    @Bean
    fun getJedisPool(): JedisPool {
        val config = JedisPoolConfig()
        config.maxIdle = properties.jedis.pool.maxIdle
        config.maxTotal = properties.jedis.pool.maxActive
        config.maxWaitMillis = properties.jedis.pool.maxWait.toMillis()
        return JedisPool(config, properties.host, properties.port, 2000, properties.password)
    }
}
```