## 转换 maven 项目为 gradle 项目
### 1.运行 gradle 初始化
```bash
gradle init

Found a Maven build. Generate a Gradle build from this? (default: yes) [yes, no]
yes

Select build script DSL:
  1: Groovy
  2: Kotlin
2
```
### 2.修改 pom 文件名称，以禁用 maven
```bash
pom.xml => p.txt
```
### 3.配置仓库
> 配置仓库，只需要在根文件下进行配置
> .\build.gradle.kts
```kt
repositories {
	maven("http://maven.aliyun.com/nexus/content/groups/public/")
	maven("http://maven.aliyun.com/nexus/content/repositories/jcenter")
	mavenCentral()
	jcenter()
}
```
### 4.配置各个模块
> .\settings.gradle.kts
