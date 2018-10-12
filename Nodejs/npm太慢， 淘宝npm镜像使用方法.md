# npm太慢， 淘宝npm镜像使用方法
## 1.临时使用

> npm --registry https://registry.npm.taobao.org install express

## 2.持久使用
> npm config set registry https://registry.npm.taobao.org

 配置后可通过下面方式来验证是否成功  
 > npm config get registry
 或
 npm info express
## 3.通过cnpm使用
> npm install -g cnpm --registry=https://registry.npm.taobao.org

使用
> cnpm install express
## 4.撤销仓库
> npm config delete registry  
> npm config set registry https://registry.npmjs.org

## 5.设置npm安装路径
> 设置了路径之后，要将路径添加到path 变量中
> npm config set prefix D:\global
> 查看路径
> npm config get prefix

## 6.设置cache路径
> npm config set cache D:\cache
> 查看缓存路径
> npm config get cache
