## nodejs 安装
### linux 安装
1. 下载 nodejs 安装包
> 直接在浏览器中下载即可 nodejs 中文网
2. 解压 nodejs 安装包
```bash 
tar -xf node-v12.15.0-linux-x64.tar.xz
```
3. 修改文件夹名称为 nodejs
```bash
rm node-v12.15.0-linux-x64 nodejs
```
4. 移动文件夹到 ~/apps 目录中
> apps 为自定义的文件夹
```bash
mv nodejs ~/apps/nodejs
```
5. 使用软连接到 /usr/bin 中
```bash
sudo ln -s /home/w/apps/nodejs/bin/node /usr/bin
sudo ln -s /home/w/apps/nodejs/bin/npm /usr/bin
sudo ln -s /home/w/apps/nodejs/bin/npx /usr/bin
```
6. 验证安装情况
```bash
node -v
npm -v
npx -v
```