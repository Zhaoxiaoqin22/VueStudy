/*let s =Symbol()
console.log(s,typeof s)*/

/*let guigu = Symbol('尚硅谷')
console.log(guigu)
let shangguigu  = Symbol('尚硅谷')
console.log(shangguigu)
console.log(guigu === shangguigu)*/

let s4 = Symbol.for('尚硅谷')
let s5 = Symbol.for('尚硅谷')
console.log(s4 === s5)