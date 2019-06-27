## 使用非注入方法获取 Spring 容器中的 Bean
```
获取 ApplicationContext, 通过 ApplicationContext 实例的方法来调用 bean
1. 实现接口 ApplicationContextAware
2. 在 setApplicationContext 方法中，将 context 实例传递给伴生对象
3. 使用伴生对象中属性调用 getBean 方法来获取 Spring 容器中的bean
```
```kotlin
@Component
class SpringBeanHelper: ApplicationContextAware {
    override fun setApplicationContext(context: ApplicationContext) {
        applicationContext = context
    }

    companion object {
        var applicationContext:ApplicationContext? = null
        fun ctx(): ApplicationContext {
            if(applicationContext == null) {
                throw NullPointerException("未获取到 applicationContext 对象")
            } else {
                return applicationContext as ApplicationContext
            }
        }
    }
}
```