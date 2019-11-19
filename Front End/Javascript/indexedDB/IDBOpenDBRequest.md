## IDBOpenDBRequest 
> 创建数据库、打开数据都会触发此操作
- onupgradeneeded  
版本改变或者创建数据库 触发事件  
用于创建表和索引，移除表，以及初始化数据
```ts
const openReq = window.indexedDB.open('test')
openReq.onupgradeneeded = (evn: Event) => {
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
连接数据库成功 触发事件  
用于对数据进行增删查改
```ts
const openReq = window.indexedDB.open('test')
openReq.onsuccess = function(evn: Event) {
    const db = openReq.result
    const trans = db.transaction(Array.from(db.objectStoreNames))
}
```
- onerror
打开或创建数据库失败 触发事件
```ts
const openReq = window.indexedDB.open('test')
openReq.onerror = function(evn: Event) {
    console.log('数据库打开失败')
}
```
