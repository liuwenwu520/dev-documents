## IDBOpenDBRequest 
> 创建数据库、打开数据都会触发此操作
- onupgradeneeded
版本改变或者创建数据库 触发事件
```ts
const openReq = window.indexedDB.open('test')
openReq.onupgradeneeded = () => {
    const db = openReq.result
    // 创建 store
    const store = db.createObjectStore('king', { autoIncrement: true })
    // ...
    // 所有 store 和索引创建完成
    store.tranasaction.oncomplete = () => {
        // 可以插入数据
        // ...
    }
}
```
- onsuccess
连接数据库成功
