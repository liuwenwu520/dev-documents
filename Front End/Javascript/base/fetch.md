fetch 使用
```js
async function request(option) {
  // 组织参数
  let url = ''
  // 请求参数
  let init = {}
  if (typeof option === 'string') {
    url = option
  } else if (typeof option === 'object') {
    // url
    url = option.url
    // method
    init.method = option.method || 'GET'
    // mode
    init.mode = option.mode || 'cors'
    // cache
    init.cache = option.cache || 'no-cache'
    // credentials
    init.credentials = option.credentials || 'same-origin'
    // redirect
    init.redirect = option.redirect || 'follow'
    // referrerPolicy
    init.referrerPolicy = option.referrerPolicy || 'no-referrer'
    // body, headers
    init.headers = option.headers || {}
    // 通过 body 来处理 Content-Type
    if (option.body) {
      if (option.body instanceof FormData) {
        init.body = option.body;
      } else if (typeof option.body === 'object') {
        init.headers['Content-Type'] = 'application/json'
        init.body = JSON.stringify(option.body);
      } else {
        init.headers['Content-Type'] = 'application/json'
        init.body = option.body;
      }
    }
    // params
    // 处理 params 将 params 加到 url 后
    if (typeof option.params === 'object') {
      const paramsStr = Reflect.ownKeys(option.params).map(item => `${item}=${(option.params[item])}`).join('&')
      url += '?' + paramsStr
    }
  }
  // 打印返回流，未处理返回流和空的情况
  try {
    const resp = await fetch(url, init);
    console.log(resp);
    
    // 打印返回流，未处理返回流和空的情况
    if (resp.ok) {
      return resp.json();
    } else {
      return Promise.reject(resp)
    }
  } catch (ex) {
    return Promise.reject(ex)
  }
}
```