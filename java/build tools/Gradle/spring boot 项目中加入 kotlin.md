## spring boot 项目中加入 kotlin
### 单应用项目
1. 应用插件，并指定版本
> .\build.gradle.kts
```kotlin
plugins {
	kotlin("jvm") version "1.5.21"
	kotlin("plugin.spring") version "1.5.21"
}
```
2. 添加依赖
```kotlin
dependencies {
	// kotlin
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
}
```
3. 加载 gradle 改变引入 kotlin 文件
4. 添加 kotlin 编译任务
> .\build.gradle.kts
```kotlin
tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "1.8"
	}
}
```
### 多应用项目
1. 添加插件，并指定版本
> .\build.gradle.kts
```kotlin
plugins {
	kotlin("jvm") version "1.5.21"
	kotlin("plugin.spring") version "1.5.21"
}
```
2. 在子项目中应用插件，和编译任务
> .\build.gradle.kts
```kotlin
subprojects {
	apply(plugin = "kotlin")
	apply(plugin = "kotlin-spring")
	tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
		kotlinOptions {
			freeCompilerArgs = listOf("-Xjsr305=strict")
			jvmTarget = "1.8"
		}
	}
}
```
3. 在子项目中添加 kotlin 依赖
> .\build.gradle.kts
```kotlin
subprojects {
	dependencies {
		implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
		implementation("org.jetbrains.kotlin:kotlin-reflect")
		implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	}
}
```
