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
> 安装
- syntax
```bash
npm i [commonOption] [<@scope>/]<name>[@<version>]
aliases: i, install
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
```
- example
```bash
npm i -gf @vue/cli
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
depth  Type: Int    依赖树最大展示深度
global/g  Type: Boolean  Default: false  是否展示全局安装
prod/production  Type: Boolean  Default: false  仅展示 dependencies
dev/development  Type: Boolean  Default: false  仅展示 devDependencies
```
- example
```
# 查看全局已安装包
npm ls -g --depth 0
# 查看本地已安装包 dependencies
npm ls -prod --depth 0
```