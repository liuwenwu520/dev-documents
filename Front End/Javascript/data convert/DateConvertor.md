## Date 转换
### # Date 转换成 String
```typescript
/**
 * 日期格式化
 * @param formate yyyy MM DD HH mm ss fff
 *                年   月  日 时 分 秒 毫秒
 * @author Wenwu 2019/11/25
 * @modifier Wenwu 2020-6-30
 */
export function dateToString(
  date: Date,
  format: string = 'yyyy-MM-DD HH:mm:ss',
): string {
  const year = date.getFullYear().toString()
  const month = date.getMonth() + 1
  let monthStr = month.toString()
  if (month < 10) {
    monthStr = '0' + monthStr
  }
  const dateOfMonth = date.getDate()
  let dateOfMonthStr = dateOfMonth.toString()
  if (dateOfMonth < 10) {
    dateOfMonthStr = '0' + dateOfMonthStr
  }
  const hour = date.getHours()
  let hourStr = hour.toString()
  if (hour < 10) {
    hourStr = '0' + hourStr
  }
  const minute = date.getMinutes()
  let minuteStr = minute.toString()
  if (minute < 10) {
    minuteStr = '0' + minuteStr
  }
  const second = date.getSeconds()
  let secondStr = second.toString()
  if (second < 10) {
    secondStr = '0' + secondStr
  }
  const millisecond = date.getUTCMilliseconds()
  let millisecondStr = millisecond.toString()
  if (millisecond < 10) {
    millisecondStr = '0' + millisecondStr
  } else if (millisecond < 100) {
    millisecondStr = '00' + millisecondStr
  }
  return format
    .replace('yyyy', year)
    .replace('MM', monthStr)
    .replace('DD', dateOfMonthStr)
    .replace('HH', hourStr)
    .replace('mm', minuteStr)
    .replace('ss', secondStr)
    .replace('fff', millisecondStr)
}
```