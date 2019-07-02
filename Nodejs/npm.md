## npm 仓库配置
```shell
# 查看仓库
npm config get registry 或 npm info express
# 设置仓库
npm config set registry https://registry.npm.taobao.org
npm config set registry https://registry.npmjs.org
# 撤销仓库
npm config delete registry
# 通过 cnpm 来使用仓库
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
## 设置 npm 全局安装路径
```shell
# 查看路径
npm config get prefix
# 设置路径
npm config set prefix D:\global
```
## 设置cache路径
```shell
# 查看 cache 路径
npm config get cache
# 设置 cache 路径
npm config set cache D:\cache
```

## npm command
1. 查看全局已安装包
```shell
npm list -g --depth 0
```