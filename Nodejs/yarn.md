## yarn 仓库配置
```shell
# 查看仓库地址
yarn config get registry
# 修改仓库地址
yarn config set registry https://registry.taobao.org
yarn config set registry https://registry.yarnpkg.com
```
## yarn 配置 global 地址
- yarn global bin 将输出 Yarn 为您已安装的可执行文件之符号链接准备的位置
```shell
yarn global bin
```
- 设置 global bin (需要将这个文件夹位置添加到 环境变量 path 中) 
```shell
yarn config set prefix [folder-path]
# 设置后的结果为 [folder-path]\bin
```
- yarn global dir 将打印存放全局 node_modules 的全局安装文件夹
```shell
yarn global dir
```
- 设置 global dir
```shell
yarn config set global-folder [folder-path]
```
- yarn cache dir 打印出当前的 yarn 全局缓存在哪里
```shell
yarn cache dir
```
- 设置全局缓存位置
```shell
yarn config set cache-folder [folder-path]
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
## yarn 全局命令
在你的操作系统上全局安装包
```bash
yarn global <add/bin/list/remove/upgrade> [--prefix]
```