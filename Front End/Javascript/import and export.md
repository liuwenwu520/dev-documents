## 导入与导出
### html 中的导入与导出
1. one.js
```js
function A() {
	console.log('A')
}
export default { A }
```
2. index.html
```html
<script type="module" src="./one.js"></script>
<script type="module">
	import A as B from './one.js'
	B.A()
</script>
```