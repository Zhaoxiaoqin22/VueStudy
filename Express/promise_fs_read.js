const fs = require('fs')
/*fs.readFile('./context.txt',(err,data)=>{
    if(err) throw err;

    console.log(data.toString())
})*/

//使用promise进行封装
let p = new Promise((resolve,reject)=>{
    //放逻辑
    fs.readFile('./context.txt',(err,data)=>{
        if(err) resolve(err)
        else {reject(data)}
    })
})

p.then(
    //(err)=>{throw err}
    (err)=>{console.log('出错了！')},
    (data)=>{console.log(data.toString())}
)
