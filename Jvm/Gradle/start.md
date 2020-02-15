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