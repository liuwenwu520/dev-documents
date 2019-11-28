## 媒体查询
### 逻辑操作符
- and
- not
- only
### 目标媒体特性
- max- 和 min-
> max- 不超过  
> min- 不小于  
```scss
// 屏幕尺寸不超过 1600px 时应用样式
@media(max-width: 1600px) {
    display: none;
}
// 屏幕尺寸不小于 1200px 时应用样式
@media(min-width: 1200px) {
    display: block;
}
```