## 在不 eject 的情况下配置 webpack
> eject 操作不可逆，需要少许配置的情况下，不建议 eject
1. 安装依赖
```
yarn add customize-cra react-app-rewired --dev
```
2. 在根目录中创建一个 config-overrides.js 文件
```js
/* ./config-overrides.js */
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
}
```
3. 替换 package.json 中 scripts 执行部分
> 使用 使用 react-app-rewired 包替换 react-scripts
```json
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom",
    "eject": "react-scripts eject"
}
```
### # 配置 antd-mobile
1. 安装 babel-plugin-import 依赖
```
yarn add babel-plugin-import -D
```
2. 在 config-overides.js 中配置引用
```js
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = override(
  // 配置 antd-mobile
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: 'css'
  }),
  // 配置别名
  addWebpackAlias({
    '@': resolve('src')
  })
)
```