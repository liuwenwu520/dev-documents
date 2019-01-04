## 报错解决
### # eslint
- Parsing error: x-invalid-end-tag
```js
// 在.eslintrc.js文件中添加规则
'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false } ]
```
