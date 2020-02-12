## yarn 仓库配置
```shell
# 查看仓库地址
yarn config get registry
# 修改仓库地址
yarn config set registry https://registry.taobao.org
yarn config set registry https://registry.yarnpkg.com
```
## yarn 配置 global 地址
- syntax
```bash
# 输出已安装的可执行文件的位置 (需要将这个文件夹位置添加到 环境变量 path 中) 
yarn global bin
# 配置全局位置
yarn config set prefix <directory>

# 输出全局安装文件夹 (node_modules)
yarn global dir
# 设置 global dir
yarn config set global-folder <directory>

# 输出当前的 yarn 全局缓存位置
yarn cache dir
# 设置全局缓存位置
yarn config set cache-folder <directory>
```
## yarn 命令
```shell
# 安装包
yarn === npm install
# 添加包到 package.json 的依赖中
yarn add [package-name] === npm install [package-name] --save
# 移除包 从 package.json 的依赖中
yarn remove [package-name] === npm uninstall [package-name] --save
# 添加包到 package.json 的开发依赖中
yarn add [package-name] --dev|-D === npm install [package-name] --save-dev
# 更新包
yarn upgrade === npm update --save

npm init === yarn init
npm link === yarn link
npm outdated === yarn outdated
npm publish === yarn publish
npm run === yarn run
npm cache clean === yarn cache clean
npm login === yarn login (logout 同理)
npm test === yarn test
```
### # yarn global
> 全局
- syntax
```bash
yarn global <add/bin/list/remove/upgrade> [--prefix]
```
- example
```bash
# 输出已安装的可执行文件的位置
yarn global bin
```
### # yarn install
- syntax
```bash

```
### # yarn list
> 列出已安装的包
- syntax
```bash
yarn [global] list [flags]
```
- flags
```bash
--depth  Type: Int          限制输出依赖深度
--pattern  Type: String     筛选依赖列表
```
- example
```bash
yarn global list --depth 0
yarn list --pattern sass
```