## CanvasRenderingContext2D  二维渲染上下文
### 获取二维渲染上下文
```js
let dom = document.getElementById('canvas')
let ctx = dom.getContext('2d')
```
### 绘制矩形
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
### 绘制路径  
> 路径绘制顺序
```
1 首先，你需要创建路径起始点。
2 然后你使用画图命令去画出路径。
3 之后你把路径封闭。
4 一旦路径生成，你就能通过描边或填充路径区域来渲染图形。
```
```ts
// 创建一个新路径
function beginPath(): void

// 将笔点返回到当前子路径起始点
// 如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作。
function closePath(): void
// Canvas 2D API 使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法。
function stroke(): void
function stroke(path: Path2D): void
// pathpath 绘制的路径

// Canvas 2D API 根据当前的填充样式，填充当前或已存在的路径的方法。采取非零环绕或者奇偶环绕规则。
function fill(): void
function fill(fillRule: string): void
function fill(path: Path2D, fillRule: string): void
// fillRule 一种算法，决定点是在路径内还是在路径外。
//   允许的值："nonzero": 非零环绕规则， 默认的规则。
//            "evenodd": 奇偶环绕规则。
// path 需要填充的Path2D 路径。
```