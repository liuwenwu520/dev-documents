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
3. 配置系统环境变量(LINUX)
```
export PATH=$PATH:/opt/gradle/gradle-6.5.1/bin
```
4. 配置环境变量(WINDOWS)
```
GRADLE_HOME     <gradle path>
PATH    $GRADLE$\bin
```
5. 验证安装
```
gradle -v
```
6. 配置本地仓库位置（使用环境变量）
```
GRADLE_USER_HOME    <GRADLE REPOSITORY PATH>
```
