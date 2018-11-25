## 1. 安装Sass和Compass
```
gem install sass
gem install compass
```
## 2. 查看Sass和Compass版本
```
sass -v
compass -v
```
## 3. 更新Sass
```
gem update sass
```
## 4. 查看Sass帮助
```
sass -h
```
## 5. 编译sass
### 5.1 命令行编译
```
// 单文件转换命令
sass input.scss output.css
// 单文件监听命令
sass --watch input.scss:output.css
// 如果你有很多的sass文件的目录，你也可以告诉sass监听整个目录：
sass --watch app/sass:public/stylesheets
```
- 命令行编译配置选项
> 命令行编译sass有配置选项，如编译过后css排版、生成调试map、开启debug信息等，可通过使用命令sass -v查看详细。
> 
```
//编译格式
sass --watch input.scss:output.css --style compact
//编译添加调试map
sass --watch input.scss:output.css --sourcemap
//选择编译格式并添加调试map
sass --watch input.scss:output.css --style expanded --sourcemap
//开启debug信息
sass --watch input.scss:output.css --debug-info
```
