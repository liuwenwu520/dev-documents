### 1.控制台乱码
```
// tomcat/conf/logging.properties
// 添加一句，如果有就修改编码与系统一致
java.util.logging.ConsoleHandler.encoding=GBK
```
### 2.程序乱码
- 1.使用bat启动
```
// tomcat/bin/catalina.bat
// 在语句结尾添加一个 -Dfile.encoding=UTF-8
set "JAVA_OPTS=%JAVA_OPTS% -Djava.protocol.handler.pkgs=org.apache.catalina.webresources -Dfile.encoding=UTF-8"
```
- 2.使用服务启动
> tomcat/bin/tomcat9w.exe  
> java》java options 添加一行 -Dfile.encoding=UTF-8
### 3.启动
#### 使用bat启动
> 点击 tomcat/bin>startup.bat 启动程序
#### 添加到服务
1. 以管理员打开cmd，进入 tomcat/bin 目录
2. 输入service 回车，提示用法
不使用名称则使用默认名称
```sh
service.bat remove [service-name]
service.bat install [service-name]
```  
3. 根据用法添加和移除服务
4. 配置服务的启动方式
