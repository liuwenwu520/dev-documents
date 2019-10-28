## animation 动画
- 使用 animation 的时候不要使用复合属性，使用单一属性
```css
@keyframes loading {
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
}
.root {
    width: 100%;
    animation-during: 1s;
    animation-name: loading;
}
```