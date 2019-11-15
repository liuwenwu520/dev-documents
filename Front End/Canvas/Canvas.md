## Canvas 画布
- 画布
> 画布默认 宽 300px 高 150px  
> 使用属性设置宽度 width 设置高度 height  
> 使用 css 设置宽高相当于对 canvas 进行缩放
```html
<canvas id="canvas" width="150" height="150"></canvas>
```
- 获取渲染上下文 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext)
> syntax
```ts
// 二维渲染上下文
getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D | null;
// 这将创建一个只提供将canvas内容替换为指定ImageBitmap功能的ImageBitmapRenderingContext
getContext(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
// 三维渲染上下文对象
getContext(contextId: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext | null;
getContext(contextId: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext | null;
getContext(contextId: string, options?: any): RenderingContext | null; 
```
> example
```ts
let dom = document.getElementById('canvas) as HTMLCanvasElement
let ctx = dom.getContext('2d) as CanvasRenderingContext2D
```