## Dockerfile 基础
> 用于构建镜像的脚本
### # 指令
- FROM
定义了使用哪个基础镜像启动构建流程
```
FROM <image-name>[:<tag>]
```
- MAINTAINER 
声明镜像的创建者
```
MAINTAINER <username>
```
- MAINTAINER 
设置环境变量（可以写多条）
```
MAINTAINER <username>
```
- RUN
设置环境变量（可以写多条）
```
# shell
RUN <命令行命令>
# exec
RUN [可执行文件, 参数1, 参数2]
```
- ADD 
将宿主机的文件复制到容器内，如果是一个压缩文件，将会在复制后自动解压
```
ADD <source_dir|file> <dest_dir|file>
```
- COPY
复制指令，从上下文目录中复制文件或者目录到容器里指定路径
```
COPY <source_dir|file> <dest_dir|file>
```
- WORKDIR 
设置工作目录
```
WORKDIR <path_dir>
```
- VOLUME
定义匿名数据卷。在启动容器时忘记挂载数据卷，会自动挂载到匿名卷。  
在启动容器 docker run 的时候，我们可以通过 -v 参数修改挂载点。
```
VOLUME ["<路径1>", "<路径2>"...]
VOLUME <路径>
```
### # 构建镜像
在 Dockerfile 文件的存放目录下，执行构建动作。
- syntax
```
docker build [opitons] <path|url|->
```
- options
```
-t <string>  指定镜像名称
```
- example
```
docker build -t mynginx:0.1 .
```