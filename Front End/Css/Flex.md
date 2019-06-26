## Flex 布局
1. flex对象下的范围超出了边界，导致 flex 元素拉长
> 通过对 flex 元素增加 height: 1px; 和 overflow: hidden; 来避免伸长
```css
.chart-wrap {
    flex: 13;
    height: 1px;
    margin-top: 1rem;
    background: #ffffff;
    overflow: hidden;
}
```