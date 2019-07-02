## yarn 仓库配置
```shell
# 查看仓库地址
yarn config get registry
# 修改仓库地址
yarn config set registry https://registry.taobao.org
yarn config set registry https://registry.yarnpkg.com
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