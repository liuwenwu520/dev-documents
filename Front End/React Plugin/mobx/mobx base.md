## mobx base
### # 示例
1. 引入包
```
yarn add mobx mobx-react
```
2. 创建状态  
src/store/appStore.ts
```ts
import { observable } from 'mobx'
const t1 = observable<any>({ name: 'abc' })
const t2 = observable<any>({})
export default { t1, t2 }
```
3. 注入到 React 组件中  
Text.tsx
```ts
import React from 'react'
import appStore form './appStore.ts'
import { observer } from 'mobx-react'
const context = React.createContext(appStore)
const App = observer(() => {
    const ctx = useContext(appStore)
    // 改变状态值
    const handleClick = () => {
        ctx.t1.name = '567'
    }
    return (
        <div onClick={handleClick}>{ctx.t1.name}</div>
    )
})
```
