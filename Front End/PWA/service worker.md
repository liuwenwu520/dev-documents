## service worker 用法
### 示例
1. 注册 service worker
```js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(reg => {
            console.log(reg)
        })
        .catch(e => console.log(e))
} else {
    console.log('不支持 service work')
}
```
2. 编写 service worker 逻辑  
> ./sw.js
```js
const CACHE_NAME = 'cache_v1'
this.addEventListener('install',async e => {
  // sw.js 改变，跳过等待
  await this.skipWaiting()
})
this.addEventListener('activate', e => {
  // sw.js 改变，直接使用
  e.waitUntil(this.clients.claim())
})
this.addEventListener('fetch', async e => {
  e.respondWith(networkFirst(e.request))
})

/**
 * 网络优先
 * @param {请求} request 
 * @author wenwu 2020-7-12
 */
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME)
  try {
    const resp = await fetch(request)
    cache.add(request)
      .catch (err2 => console.log('不支持缓存', request.url)) 
    return resp
  } catch(err) {
    const cached = await cache.match(request)
    return cached
  }
}
```