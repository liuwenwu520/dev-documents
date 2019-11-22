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
- 嵌套导入
```scss
// _blue-theme.scss
aside {
  background: blue;
  color: white;
}

// now.scss
.blue-theme {@import "blue-theme"}

// generate
.blue-theme {
  aside {
    background: blue;
    color: #fff;
  }
}
```
### mixin
> 使用混入提高代码重用
- 基本使用
```scss
// 声明 @mixin
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
// 使用 @include
notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}
```
- 带参数的 mixin
```scss
// 声明
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
// 调用
a {
    @include link-colors(
      $normal: blue,
      $visited: green,
      $hover: red
  );
}

```
- 带默认参数的 mixin
```scss
// 声明
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
// 调用
a {
    @include link-colors(red);
}
// $hover 和 $visited 也会被自动赋值为 red
```
### 继承
```scss
//通过选择器继承继承样式
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
// 以class="seriousError" 修饰的html元素最终的展示效果就好像是class="seriousError error"。
```