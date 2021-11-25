# 安装 PaddleOCR 服务
## 问题
### 1.pip 安装whl文件报 is not a supported wheel on this platform
```
出现问题的原因：
1. 安装的不是对应Python版本的库，下载的库名中cp27代表python2.7,其它同理。
2. 下载的是对应版本的库，提示不支持当前平台
解决方案：
1、下载对应Python版本的whl文件
2、查看pip支持的平台：
```
### 2.ImportError: cannot import name 'ContextVar' from 'werkzeug.local'
```
解决方案：
考虑flask的版本兼容性，本人环境里已有flask 2.0.1，降级到与Paddle匹配的1.1.2即可解决。
pip uninstall flask   #卸载  你也可以省略这步，直接pip install flask==1.0
pip install flask==1.0   #我这里改成1.0就行了，改成其他低版本应该也没问题，有兴趣自己试下
```
### 3.ImportError: cannot import name 'MultiLangClient' 
```
解决方案：
pip install --upgrade paddle_serving_client 即可
```
