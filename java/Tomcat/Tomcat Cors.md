## Tomcat 跨域配置
### tomcat 8 及以上跨域
> config/web.xml
```xml
	<filter>
		<filter-name>CorsFilter</filter-name>
		<filter-class>org.apache.catalina.filters.CorsFilter</filter-class>
		<init-param>
			<param-name>cors.allowed.origins</param-name>
			<param-value>*</param-value>
		</init-param>
		<init-param>
			<param-name>cors.allowed.methods</param-name>
			<param-value>GET,POST,HEAD,OPTIONS,PUT,DELETE</param-value>
		</init-param>
		<init-param>
			<param-name>cors.allowed.headers</param-name>
			<param-value>*</param-value>
		</init-param>
		<init-param>
			<param-name>cors.exposed.headers</param-name>
			<param-value>Access-Control-Allow-Origin,Access-Control-Allow-Credentials</param-value>
		</init-param>
		<init-param>
			<param-name>cors.support.credentials</param-name>
			<param-value>true</param-value>
		</init-param>
	 
	</filter>
	<filter-mapping>
		<filter-name>CorsFilter</filter-name>
		<url-pattern>/*</url-pattern>
	</filter-mapping>
```
### # tomcat 7 跨域
- arcgis tomcat 位置
> <ARCGIS_SERVER_HOME>\framework\runtime\tomcat
- 导包
> cors-filter-1.7.jar> java-property-utils-1.9.jar
- 配置
> TOMCAT_HOME/conf/web.xml
```xml
<filter>
  <filter-name>CORS</filter-name>
  <filter-class>com.thetransactioncompany.cors.CORSFilter</filter-class>
  <init-param>
    <param-name>cors.allowOrigin</param-name>
    <param-value>*</param-value>
  </init-param>
  <init-param>
    <param-name>cors.supportedMethods</param-name>
    <param-value>GET, POST, HEAD, PUT, DELETE</param-value>
  </init-param>
  <init-param>
    <param-name>cors.supportedHeaders</param-name>
    <param-value>Accept, Origin, X-Requested-With, Content-Type, Last-Modified</param-value>
  </init-param>
  <init-param>
    <param-name>cors.exposedHeaders</param-name>
    <param-value>Set-Cookie</param-value>
  </init-param>
  <init-param>
    <param-name>cors.supportsCredentials</param-name>
    <param-value>true</param-value>
  </init-param>
</filter>
  
<filter-mapping>
  <filter-name>CORS</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>
```