## Web App Manifest
### # 使用
1. 创建一个 manifest 文件,(与 html 文件位置相同)
manifest.json
```
{  
  "name": "添加到 manifest" 
}
```
2. 在 html 中引入 manifest.json
```
<head>
  <link rel="manifest" href="manifest.json">
<head>
```
### # 属性
- name
> 应用名称，用于安装横幅提示的名称，和启动画面中的文字
```
"name": "PWA DEMO"
```
- short_name
> 手机桌面名称
```
"short_name": "PWA"
```
- display
> 展示类型
```
fullscreen  占满整个屏幕
standalone  浏览器相关 UI（如导航栏、工具栏等）将会被隐藏，默认值

# 例
"display": "standalone"
```
- start_url
> 指定应用打开时的网址  
> 空值默认使用用户打开的当前页面为首屏
```
"start_url": "/"
```
- icons
> 启动和屏幕图标，数组
```
"icons": [
    {
        "src": "img/icons/1.png"
        "size": "64x64",
        "type": "image/png"
    },
    {
        "src": "img/icons/2.png"
        "size": "96x96",
        "type": "image/png"
    }
]
```
- background_color
> 背景色
```
"background_color": "#123123"
```
- theme_color
> 状态栏背景色
```
"theme_color": "#456456"
```
