## 添加蓝牙驱动
```bash
sudo apt install bluetooth blueman
```
## rfkill 命令
> 管理蓝牙和 wifi 设备
### 查看列表
```bash
rfkill list
```
### 帮助
```bash
rfkill --help
```
### 解锁
```bash
rfkill unblock [ID]
```
### 锁定
```bash
rfkill block [ID]
```