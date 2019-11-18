## indexedDB 的使用
### 操作数据库
- example
```ts
const openReq = window.indexedDB.open('myDB')
```
- 打开或者创建数据库
```ts
// indexedDB 为 IDBOpenDBRequest
window.indexedDB.open(name: string, version?: number): IDBOpenDBRequest
```
- 删除数据库
```ts
window.indexedDB.deleteDatabase(name: string): IDBOpenDBRequest
```
### 初始化数据库
- example
```ts
// 创建数据库或者更新数据库版本
const openReq = window.indexedDB.open('myDB')
// 对数据库进行版本初始化操作
openReq.onupgradeneeded = function(evn: Event) {
    // 获取数据库
    const db = (evn.target as IDBOpenDBRequest).result
    // 或者
    // const db = openReq.result
}
```
