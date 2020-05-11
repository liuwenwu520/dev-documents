## 配置
```js
require(["esri/config"], function(esriConfig) { /* code goes here */ });
```
### # 配置请求超时
> 默认 60000 ms
```js
// 单位 ms
esriConfig.request.timeout = 600000
```
### # 配置代理
> 用于解决 ArcGIS api 4 中的 TileLayer 跨域问题  
> [ArcGIS Proxy 官方地址](https://github.com/Esri/resource-proxy)
### # 配置字体
> 配置字体路径,用于 TextSymbol 中的 font family 使用，默认会使用在线字体 (pbf 字体)  
> Default Value:"https://static.arcgis.com/fonts"
```js
esriConfig.fontsUrl = "https://myserver.com/fonts";
```