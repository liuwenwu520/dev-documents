# 搭建Vue的开发环境
 https://cn.vuejs.org/v2/guide/installation.html
1. 安装nodejs
2. 搭建vue的开发环境 ，安装vue的脚手架工具 官方命令行工具
```
npm install --global vue-cli
```
 或者
```
cnpm install --global vue-cli
```
  此命令只需要执行一次  
3. 创建项目
  必须cd到对应的一个项目里面
  > cmd 命令
  ```
  //改变盘符
  C:\User\Administrator>D:
  D:>
  //CD到子目录中
  D:\>cd bl
  D:\bl>
  //CD到子子目录中
  D:\>CD bl\Vue_Project
  D:\bl\Vue_Project>
  //回到上级目录
  D:\bl>cd ..
  D:\>
  //回到上上级目录
  D:\bl\Vue_Project>cd ..\..\
  d:\>
  ```

  创建项目
  ```
  // 创建项目 名称为vue-demo01
  vue init webpack vue-demo01
  // cd到vue-demo01中
  cd  vue-demo01
  // 安装依赖
  cnpm install   /  npm install
  // 运行项目
  npm run dev
  ```
4. 另一种创建项目的方式   （推荐）  ***
  ```
  vue init webpack-simple vuedemo02
  cd  vuedemo02
  cnpm install   /  npm install        
  npm run dev
  ```
