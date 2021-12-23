## Zuul 过滤器
### ZuulFilter
```kotlin
package org.wenwu.gatewayzuul.auth.filter

import com.netflix.zuul.ZuulFilter
import com.netflix.zuul.context.RequestContext
import org.slf4j.LoggerFactory
import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants.PRE_TYPE
import org.springframework.context.annotation.Configuration
import org.wenwu.gatewayzuul.base.utility.JsonResult

/**
 * 权限认证过滤器
 * 用于确认用户是否有权限访问资源
 * @author Wenwu 24/4/2020
 */
@Configuration
class AccessFilter : ZuulFilter() {
//    val logger = LoggerFactory.getLogger(AccessFilter::class.java)
    override fun run(): Any? {
        val ctx = RequestContext.getCurrentContext()
        val response = ctx.response
        val request = ctx.request
        val auth = request.getHeader("Authorization")
        if (!auth.isNullOrBlank()) {
            if (false) {
                ctx.setSendZuulResponse(false)
                ctx.responseStatusCode = 200
                response.addHeader("Content-Type", "application/json")
                ctx.responseBody = JsonResult.bad("The token is invalid.").toJsonString()
            }
        } else {
            ctx.setSendZuulResponse(false)
            ctx.responseStatusCode = 200
            response.addHeader("Content-Type", "application/json")
            ctx.responseBody = JsonResult.bad("No Token").toJsonString()
        }
        return null
    }

    override fun shouldFilter(): Boolean = true

    override fun filterType(): String = PRE_TYPE

    override fun filterOrder(): Int = FILTER_ORDER

    companion object {
        const val FILTER_ORDER = 0
    }
}
```