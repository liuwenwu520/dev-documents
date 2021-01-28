# 表格组件
### 表格数据删除时局部刷新
- html
```xml
<el-table
	v-loading="loading"
	ref="table"
	:data="districtList"
	:tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
	lazy
	row-key="xzqdm"
	:load="loadData"
>...
</el-table>
```
- js
```js
data() {
	return {
		// 行政区列表
		districtList: [],
		// 行政区节点map
		districtNodeMap: new Map(),
	}
},
methods: {
	// 懒加载数据方法
	async loadData(tree, treeNode, resolve) {
		// 存储节点刷新函数到节点map中
		this.districtNodeMap.set(tree.xzqdm, { tree, treeNode, resolve })
		// 请求数据，刷新数据
		const body = { fjxzqdm: tree.xzqdm }
		const res = await api.district.findList(body)
		const arr = res.rows.map(item => ({ ...item, hasChildren: true }))
		resolve(arr)
	},
	// 删除数据
	async delete() {
		// 调用刷新函数
		await api.district.deleteList(rowScope.row.xzqdm)
		if (this.districtNodeMap.has(rowScope.row.fjxzqdm)) {
			// 非根节点处理
			// 清空父节点下的数据
			this.$set(this.$refs.table.store.states.lazyTreeNodeMap, rowScope.row.fjxzqdm, []);
			// 重新调用刷新函数进行节点数据请求
			const {tree, treeNode, resolve} = this.districtNodeMap.get(rowScope.row.fjxzqdm)
			this.loadData(tree, treeNode, resolve)
		} else {
			// 根节点重新刷新根节点数据
			this.init()
		}
		this.$message.success('删除成功')
	}
}
```