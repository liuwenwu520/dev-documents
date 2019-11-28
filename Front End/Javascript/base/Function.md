### bind
```js
Function.prototype.mybind = function(thisArg) {
    if (typeof this !== 'function') {
        throw TypeError('Bind must be called on a function')
    }
    const args = Array.prototype.slice.call(arguments, 1),
        self = this,
        nop = function() {},
        bound = function() {
            return self.apply(
                this instaceof nop ? this: thisArg
            )
        }
}
```
### call
```js
Function.prototype.mycall = function(thisArg) {
    if (typeof this !== 'function') {
        throw TypeError('Bind must be called on a function')
    }
    const args = [...arguments].slice(1)
    thisArg = thisArg || window
    thisArg.fn = this
    const result = thisArg.fn(...arg)
    delete thisArg.fn
    return result
}
```