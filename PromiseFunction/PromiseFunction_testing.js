let fs = require('fs');

let a = Math.random()
let p1 = new Promise(
    (resolve,reject)=>{
        if(a<=3){resolve(a)}
        else{
            reject(a)
        }
    }
);

let p2 = new Promise(
    (resolve,reject)=>{
        if(a<=5){resolve(a)}
            else{reject(a)}
    }
)

let pa = Promise.all([p1,p2]);

console.log(a)
console.log(pa)


