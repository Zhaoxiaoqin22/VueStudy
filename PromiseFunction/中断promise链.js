let p1 = new Promise(
    (resolve, reject)=>{
        resolve('狗蛋')
    }
)

p1.then(
    value =>new Promise(()=>{})
).then(
    value => console.log('高子')
)
.then(
    value => console.log('狗蛋')
)

