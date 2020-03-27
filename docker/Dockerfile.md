## Dockerfile 基础
> 用于构建镜像的脚本
### # 基本用法
```
# 定义了使用哪个基础镜像启动构建流程
FROM <image-name>[:<tag>]

# 声明镜像的创建者
MAINTAINER <username>

# 设置环境变量（可以写多条）
ENV <key> <value>

# 用于执行后面跟着的命令行命令(可以写多条)
- RUN <command>
# shell
RUN <命令行命令>
# exec
RUN [可执行文件, 参数1, 参数2]

# 将宿主机的文件复制到容器内，如果是一个压缩文件，将会在复制后自动解压
ADD <source_dir|file> <dest_dir|file>

# 和 ADD 相似，但是如果有亚索文件并不能解压
COPY <source_dir|file> <dest_dir|file>

# 设置工作目录
WORKDIR <path_dir>
```