### # 使用 token
- 引入对象
```js
require(["esri/identity/IdentityManager"], function(IdentityManager) {}
```
- 使用 token
```js
IdentityManager.registerToken({
  server: 'http://localhost/arcgis/rest/services',
  token: 'lsQoBfFiq0bFk9q1w425n3YSJfNIXh_CHRPirRZTJnecSH8eqs5KyPvCEtJq4CHq'
})
```