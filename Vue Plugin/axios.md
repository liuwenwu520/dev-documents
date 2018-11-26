## axios
> ajax请求  
> [Github](https://github.com/axios/axios)

- install
> npm install --save axios
- start    
```js
// 每次使用都需要引用
import axios from 'axios'
// 设置请求带证书(用于跨域访问，设置为true，每次请求的session不会改变)
axios.defaults.withCredentials = true
```
- baseURL
```js
// 编辑main.js
import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080/'
Vue.prototype.axios = axios
// 使用 (vue对象中)
this.axios.get('getImgList').then(res => console.log(res))
```
- get
```js
axios.get(url)
  .then(response => {})
  .catch(err => {})
  .finally(() => {})
```
- post
```js
axios.post(url,params)
  .then(response => {})
  .catch(err => {})
  .finally(() => {})
```
