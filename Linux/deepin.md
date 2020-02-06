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