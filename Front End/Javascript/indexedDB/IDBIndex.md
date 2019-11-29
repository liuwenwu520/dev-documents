## 索引的使用
> IDBIndex
### 创建索引
> 在创建 object store 是创建索引
```ts
const openReq = window.indexedDB.open('mydb')
openReq.onupgradeneeded = () => {
    const db = openReq.result
    const store = db.createObjectStore('king', { autoIncrement: true })
    // 创建索引
    store.createIndex('indexName', 'refenrenceColumn', {unique: false, multiEntry: true})
}
```
### 使用索引
> 在查询数据的使用使用索引
```ts
const openReq = window.indexedDB.open('mydb')
openReq.onsuccess = () => {
    const db = openReq.result
    const storeName = 'king'
    const store = db.transaction(storeName).objectStore(storeName)
    const index = store.index('indexName')
    const indexValue = '刘备'
    index.getAll(indexValue).onsuccess = (evn: Event) => {
        // 得到值
        let result = (evn.target as IDBRequest).result
    }
}
```