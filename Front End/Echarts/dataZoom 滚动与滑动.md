## dataZoom 滚动条或界面滑动
- 滑动条高度配置
> slider 类型中配置 height
```
dataZoom: [
          {
            type: 'slider',
            show: true,
            startValue: 0,
            endValue: 10,
            height: 16,
            bottom: 0
          },
          {
            type: 'inside',
            realtime: true,
            startValue: 0,
            endValue: 10
          }
        ]
```