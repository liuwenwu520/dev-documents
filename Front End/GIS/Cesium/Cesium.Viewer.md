## Cesium.Viewer
### # 使用
```js
// 引入
const Cesium = require('cesium/Cesium')
// 配置
const Viewer = new Cesium(option)
```
### # 配置
- 相机默认位置
```js
Cesium.Camera.DEFAULT_VIEW_RECTANGLE= Cesium.Rectangle.fromDegrees(80,22,130,50)
```
- 地形覆盖三维模型
```js
// 不覆盖
viewer.scene.globe.depthTestAgainstTerrain = false
```