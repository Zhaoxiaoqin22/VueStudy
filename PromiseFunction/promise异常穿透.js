let p =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ok')
    },2000)
})

p.then(
    value => {console.log(111)}
).then(
    value => {console.log(222)}
).then(
    value => {console.log(333)}
).catch(
    reason => console.log('错啦！')
)