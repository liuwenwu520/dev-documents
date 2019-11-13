## config
```js
require(["esri/config"], function(esriConfig) { /* code goes here */ });
```
- fontsUrl
> 配置字体路径,用于 TextSymbol 中的 font family 使用，默认会使用在线字体 (pbf 字体)  
> Default Value:"https://static.arcgis.com/fonts"
```js
esriConfig.fontsUrl = "https://myserver.com/fonts";
```
