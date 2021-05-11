## arcgis 基础
### 引入 arcgis 
```html
<head>
  <link rel="stylesheet" href="http://192.168.2.88/arcgis_js_api/library/4.15/esri/css/main.css">
	<script src="http://192.168.2.88/arcgis_js_api/library/4.15/init.js"></script>
</head>
```
### 初始化、使用 arcgis 对象
> 需要注意 dojo 是否与其他库冲突，导致 require 无效
```js
// 初始化方法
function arcgisReady(fn) {
	if (typeof fn !== 'function') throw new TypeError('参数必须是函数');
	require([
		'esri/Map',
		'esri/views/MapView',
		'dojo/domReady!',
	], (Map, MapView) => {
		const arcgisObject = {
			Map, MapView
		}
		fn.call(fn, arcgisObject)
	})
}
// 异步获取 arcgis 对象方法
function getArcgisObjectAsync() {
	return new Promise((resolve, reject) => {
		try {
			arcgisReady((arcgisObject) => resolve(arcgisObject))
		} catch (ex) {
			reject(ex)
		}
	})
}
```