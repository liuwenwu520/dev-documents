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
```bash
# 查看路径
npm config get prefix
# 设置路径
npm config set prefix d:\appsdata\nodejs\npmGlobal
```
## 设置cache路径
```bash
# 查看 cache 路径
npm config get cache
# 设置 cache 路径
npm config set cache d:\appsdata\nodejs\npmCache
```
### # npm-folder
- syntax
```bash
npm [folder]
```
- option
```bash
(default)       local, 本地
-g, --global    全局
```
### # npm-install
> 安装包
- syntax
```bash
npm add [commonOption] [<@scope>/]<pkg>[@<version>]...
aliases: i, install, add
```
- commonOption
```bash
-P, --save-prod
-D, --save-dev      开发依赖，不会打包
-O, --save-optional
-E, --save-exact
-B, --save-bundle
--no-save
--dry-run
-f, --force         如果包已安装，则会强制覆盖
-g, --global
```
- example
```bash
npm i -gf @vue/cli
# 安装多个包
npm add node-sass sass-loader
```
### # npm-uninstall
> 移除包
> 安装包
- syntax
```bash
npm rm [commonOption] [<@scope>/]<pkg>[@<version>]...
aliases: r, rm, remove, un, unlink, uninstall
```
- commonOption
```bash
-P, --save-prod
-D, --save-dev      开发依赖，不会打包
-O, --save-optional
-f, --force
-g, --global        全局
```
- example
```bash
# 删除本地包
npm rm node-sass sass-loader
```
### # npm-ls
> 列出已安装包
- syntax
```bash
npm ls [[<@scope>/]<pkg> ...] [configuration ...]
aliases: ls, list, la, ll
```
- configuration
```bash
--depth  Type: Int    依赖树最大展示深度
-g, --global  Type: Boolean  Default: false  是否展示全局安装
-prod, --production  Type: Boolean  Default: false  仅展示 dependencies
-dev, --development  Type: Boolean  Default: false  仅展示 devDependencies
```
- example
```
# 查看全局已安装包
npm ls -g --depth 0
# 查看本地已安装包 dependencies
npm ls -prod --depth 0
```
### # npm-update
> 更新包
- syntax
```bash
npm update [-g] [<pkg>...]
aliases: up, update, upgrade
```
- example
```bash
# 更新全局所有包
npm up -g
```

### 镜像的使用
一些常用的国内npm镜像源如下：  
- cnpmjs镜像：https://r.cnpmjs.org/
- npmmirror镜像：https://npmmirror.com/
- 华为云镜像：https://mirrors.huaweicloud.com/repository/npm/
- 腾讯云镜像：https://mirrors.cloud.tencent.com/npm/

如果您想使用nrm工具快速切换不同的npm镜像源，您可以参考以下步骤：  
- 安装nrm工具：  
```bash
npm install -g nrm
```
- 查看可用的npm镜像源列表：

```bash
nrm ls
```

- 切换到某个npm镜像源，例如腾讯云：

```bash
nrm use tencent
```