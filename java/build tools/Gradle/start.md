## Gradle
### # 仓库配置
- build.gradle.kts
```kotlin
repositories {
    maven("http://maven.aliyun.com/nexus/content/groups/public/")
    maven("http://maven.aliyun.com/nexus/content/repositories/jcenter")
    mavenCentral()
    jcenter()
}
```
### # 安装 gradle
> [gradle 官方教程](https://docs.gradle.org/current/userguide/installation.html)  
> 依赖与 jdk 8 以上
1. 下载 gradle 二进制包
2. 解压 gradle 下载文件
3. 配置系统环境变量
```
export PATH=$PATH:/opt/gradle/gradle-6.5.1/bin
```
4. 验证安装
```
gradle -v
```