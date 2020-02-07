## 添加蓝牙驱动
```bash
sudo apt install bluetooth blueman
```
## rfkill 命令
> 管理蓝牙和 wifi 设备
### - 查看列表
```bash
rfkill list
```
### - 帮助
```bash
rfkill --help
```
### - 解锁
```bash
rfkill unblock [ID]
```
### - 锁定
```bash
rfkill block [ID]
```
## wine 编译和安装(64bit linux)
### build
```bash
./configure --enable-win64
```
### 遇到问题，安装以下依赖库
- Cannot build a 32-bit program, you need to install 32-bit development libraries.
```bash
sudo apt-get install gcc-multilib g++-multilib
```
- error: X 32-bit development files not found. Wine will be built
without X support, which probably isn't what you want. You will need
to install 32-bit development packages of Xlib at the very least.
Use the --without-x option if you really want this.
```bash
sudo apt-get install libx11-dev
```
- error: FreeType 32-bit development files not found
```bash
sudo apt-get install libfreetype6-dev
```
### install
```bash
make
make install
```
## shortcut 快捷方式
```bash
# 1 创建文件
touch app.desktop
# 2 编辑文件
[Desktop Entry]
Exec=/home/wenwu/Apps/firefox/firefox  //就是可执行程序的绝对路径
Icon=/home/luka/Documents/MyPictures/genymotion/icons/icon.png //应用图标的绝对路径
Type=Application  //貌似有Application和Link类型,这里是Application类型
Terminal=false  //打开程序的时候要不要打开终端,false不打开,true打开,可以不写
Name=Genymotion  //程序显示名
GenericName=Genymotion // 可不写
Categories=Gneymotion // 可不写
Name[en_US]=Gnemotion
GenericName[en_US.UTF-8]=Genymotion
Name[zh_CN]=Genymotion
```