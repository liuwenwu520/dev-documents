## CanvasRenderingContext2D  二维渲染上下文
- 获取二维渲染上下文
```js
let dom = document.getElementById('canvas')
let ctx = dom.getContext('2d')
```
- 绘制矩形
```ts
// 绘制一个填充矩形
function fillRect(x: number, y: number, width: number, height: number): void
// 绘制一个矩形的边框
function strokeRect(x: number, y: number, width: number, height: number): void
// 清除指定矩形区域，让清除部分完全透明
function clearReac(x: number, y: number, width: number, height: number): void
// x 与 y 指定了在 canvas 画布上所绘制的矩形的左上角（相对于原点）的坐标
// width 和 height 设置矩形的尺寸
```