## A 弧形
```
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
rx: x轴（长轴或者短轴的一半）
ry: y轴（长轴或者短轴的一半）
x-axis-rotation: 旋转角度(degree) (只有 rx 和 ry 不同时才生效)
large-arc-flat: 0 短弧 1 长弧
sweep-flag: 0 逆时针 1 顺时针
x y: 终点坐标
```
> 示例
```html
<svg width="320" height="320">
    <path
        d="M 10 315
           L 110 215
           a 50 60 45 1 1 50 50
           "
        stroke="#000" fill="none" />
</svg>
```
## 镂空
> 外层绘制顺序与里层绘制顺序相反则能形成镂空  
> 例如外层使用顺时针，里层图形使用逆时针则能镂空  
> 注意图形需要使用 z 来闭合
