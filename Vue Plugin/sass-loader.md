## 1. install gyp
> node-gyp就是一个编译工具，将源码形式的node modules编译成适应于本地环境的、编译好的node modules，其中的编译过程就需要依赖一些编译工具，如c编译器和python环境。
>
```
npm install -g node-gyp
```
## 2. install node-sass
> sass-loader 的依赖
>
```
npm install --save-dev node-sass
```
## 3. install sass-loader
sass 加载器
```
npm install --save-dev sass-loader
```
## 4. 查看安装结果
> package.json文件
> 在 devDependencies对象中查看
## 5. 添加scss格式识别
> build/webpack.base.conf.js
> test js正则表达式
```js
module:{
  rules:[
    {
      test:/\.scss$/,
      loader:['style','css','sass']
    }
]}
```
