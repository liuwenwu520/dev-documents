## Notification 使用
### # 示例
```js
let notificationAvailability = false
if ('Notification' in window) {
  if (Notification.permission === 'default') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'denied') {
        notify('授权 Notification 被拒绝')
      } else if (permission === 'default') {
        notify('授权 Notification 被跳过')
      } else {
        notificationAvailability = true
      }
    })
  } else if ((Notification.permission = 'granted')) {
    notificationAvailability = true
  }
} else {
  const info = '不支持 Notification'
  notify(info)
}
function notify(content, title) {
  console.log(content)
  if (notificationAvailability) {
    return new Notification(title, { body: content })
  } else {
    alert(content)
  }
}
window.notify = notify
```