const util = require('util');
const fs = require('fs')

//promisify接收一个readFile的方法，返回一个promise对象
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./context.txt').then(
    value => {console.log(value.toString()),
    err => {console.log(err)}
})
