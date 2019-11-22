## Sass 的一些重要特性
### 变量
- 默认变量值
> 一般情况下，你反复声明一个变量，只有最后一处声明有效且它会覆盖前边的值。  
> !default 标签，用于变量  
> 如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值。  
```scss
$fancybox-width: 400px !default;
.fancybox {
    width: $fancybox-width;
}
```
### 嵌套
### 导入 SASS 文件
- 引入其他 SASS 文件
> 可以省略文件后缀 .scss  
> sass 局部文件的文件名以下划线开头，sass 就不会在编译是单独编译这个文件输出 css，而只把这个文件用作导入  
> 局部文件的导入可以省略前面的下划线
```scss
@import "theme/mixins";
@import "themes/_night-sky";
@import "themes/night-sky";
```