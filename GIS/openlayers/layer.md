# 图层和源
## 1.图层与源的关系
```ts
// 在图层中加载源
new TileLayer({
  source: new XYZ({...})
})
```
## 2.源
### xyz 源
```ts
// xyz 源
import { XYZ } from 'ol/source'
import { Projection } from 'ol/proj'
// xyz 源选项
interface XyzOption {
  // url http://t0.tianditu.com/DataServer?T=${type}&x={x}&y={y}&l={z}&tk=${tdttk}
  url: string
  // 坐标系 'EPSG:4326'
  projection: string | Projection
}
// 获取 xyz 源
function getXyzSource(option: XyzOption): XYZ {
  return new XYZ(option)
}
```
### wmts 源
```ts
import { WMTS } from 'ol/source'
import { Projection, get as getProjection } from 'ol/proj'
import { getTopLeft, getWidth } from 'ol/extent'
import WMTSTileGrid from 'ol/tilegrid/WMTS'
// wmts 源选项
interface WmtsOption {
  // 属性
  attributions: string
  // 地址
  url: string
  // 图层名称
  layer: string
  // 矩阵集
  matrixSet: string
  // 瓦片格式
  format: string
  // 瓦片样式
  style: string
  // 坐标投影
  projection: string
  // 瓦片级数
  resolutionsLength: number
}
// 获取 wmts 源
function getWmtsSource(option: WmtsOption) {
  const { attributions, url, layer, matrixSet, format, style, projection, resolutionsLength } = option
  const projectionObj = getProjection(projection)
  const projectionExtent = projectionObj.getExtent()
  const size = getWidth(projectionExtent) / 256
  const length = resolutionsLength || 19
  const resolutions = new Array(length)
  const matrixIds = new Array(length)
  for (let z = 0; z < length; ++z) {
    resolutions[z] = size / Math.pow(2, z)
    matrixIds[z] = z
  }
  // 返回源
  return new WMTS({
    attributions,
    url,
    layer,
    matrixSet,
    format,
    style: style || 'default',
    projection: projectionObj,
    tileGrid: new WMTSTileGrid({
      origin: getTopLeft(projectionExtent),
      resolutions: resolutions,
      matrixIds: matrixIds,
    }),
    wrapX: true,
  })
}
```
### TileWMS 源
```ts
import { TileWMS } from 'ol/source'
// tile wmts 参数
interface TileWmsOptionParams {
  // 参数.图层名
  LAYERS: string
  // 参数.是否瓦片
  TILED: boolean
}
// wms 选项
interface TileWmsOption {
  // 地址
  url: string
  // 参数
  params: TileWmsOptionParams
  // 远程 wms 服务器类型; eg: mapserver, geoserver, carmentaserver, or qgis
  serverType: string
}
// 获取 TileWMS 源
function getTileWmsSource(option: TileWmsOption) {
  const { url, params, serverType } = option
  return new TileWMS({ url, params, serverType })
}
```
### ImageWMS 源
```ts
import { ImageWMS } from 'ol/source'
// ImageWMS 选项 参数
interface ImageWmsOptionParams {
  // 参数.图层名
  LAYERS: string
}
// ImageWMS 选项
interface ImageWmsOption {
  // 参数.图层名
  LAYERS: string
}
// 获取 ImageWMS 源
function getImageWmsSource(option: ImageWmsOption) {
  const { url, params, serverType } = option
  new ImageWMS({ url, params, serverType })
}
```