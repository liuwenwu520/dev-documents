## Vuescroll 滚动条插件
> 一个可定制的， 功能强大，多模式的基于 Vue.js 设计的滚动条插  
> [Vuescroll官网](vuescrolljs.yvescoding.org)
### # 特点
#### 基本特点
- 支持自定义滚动条，包括可以设置滚动条/轨道的颜色、透明度。可以设置滚动条是否保持显示。
- 支持平滑滚动，可以通过设置easing来获得不同的滚动动画。
- 支持自动检测内容是否发生变化。
#### 只在 slide 模式下有效的特点
- 支持下拉刷新和上推加载，具体可以查看这个demo和这个 SSR 版本的demo。
- 支持截断配置,每次滚动固定的距离。可以查看这个 demo。
- 支持分页。
#### 其他特点
- 支持 typescript
- 支持 SSR
### # Start
#### Install
'''sh
npm i -S
# 或者通过yarn
yarn add vuescroll
# 或者通过cnpm
cnpm i -S
'''
#### 引入
1. 全局引入
'''js
// main.js 入口文件
import Vue from 'vue';
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
// 你可以在这里设置全局配置
Vue.use(vuescroll, {
  ops: {}, // 在这里设置全局默认配置
  name: 'myScroll' // 在这里自定义组件名字，默认是vueScroll
});
/*
 * 或者
 */
Vue.use(vuescroll); // install the vuescroll first
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#000'
  }
};
'''
2. 局部引入
'''html
<template>
  <vue-scroll> <!-- 你的内容... --> </vue-scroll>
</template>
<script>
  import vuescroll from 'vuescroll';
  import 'vuescroll/dist/vuescroll.css';
  export default {
    components: {
      vuescroll
    }
  };
</script>
'''
#### 只引入需要的模式
- 只引入slide模式的特性：
native 模式: 类似于原生的滚动条，但是可以自定义滚动条样式，使用于 PC 端用户。
'''js
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-slide';
import 'vuescroll/dist/vuescroll.css';
Vue.use(vuescroll);
'''
- 只引入native模式的特性：
slide 模式: 允许你用手指或鼠标滑动内容， 可以滑动超出边界范围，适用于移动端端用户。
'''js
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-native';
import 'vuescroll/dist/vuescroll.css';
Vue.use(vuescroll);
'''
