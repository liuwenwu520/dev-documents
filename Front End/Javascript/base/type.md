## js 判断类型
### typeof
typeof 只能判断区分基本类型, number, string, boolean, undefined, object, function
```js
typeof 0;  //number;
typeof true;  //boolean;
typeof undefined;  //undefined;
typeof "hello world"   //string;
typeof function(){};   //function;

typeof null; //object
typeof {};  //object;
typeof []; //object
```
### instanceof
```js
var a={};
a instanceof Object  //true
a intanceof Array     //false
var b=[];
b instanceof Array  //true
b instanceof  Object //true
// 因为数组属于object中的一种，所以数组instanceof object,也是true.
```
### Object.prototype.toString.call()
```js
Object.prototype.toString.call(123)
//"[object Number]"

Object.prototype.toString.call('str')
//"[object String]"

Object.prototype.toString.call(true)
//"[object Boolean]"

Object.prototype.toString.call({})
//"[object Object]"

Object.prototype.toString.call([])
//"[object Array]"

Object.prototype.toString.call(function() {})
//"[object Function]"
```
```
Object.prototype.toString方法的在被调用的时候，会执行如下的操作步骤：
1. 获取对象的类名（对象类型）。
[[Class]]是一个内部属性,所有的对象(原生对象和宿主对象)都拥有该属性.在规范中,[[Class]]是这么定义的: 
内部属性,[[Class]] 一个字符串值,表明了该对象的类型。
2. 然后将[object  获取的对象类型的名]组合为字符串 
3. 返回字符串 “[object Array]” 。
```
