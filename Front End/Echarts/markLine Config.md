## markLine 配置
- 设置 markLine tooltip
> 在 markLine.data 中的对象中设置 tooltip
```js
markLine: {
              symbol: 'none',
              lineStyle: {
                width: 2
              },
              label: {
                show: false
              },
              data: [
                {
                  name: '规划数据',
                  xAxis: plan[0] + '',
                  tooltip: {
                    show: false
                  }
                },
                {
                  yAxis: plan[1],
                  tooltip: {
                    show: false
                  }
                }
              ]
            }
```