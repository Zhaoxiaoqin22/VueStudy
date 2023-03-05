function  mineReadFile(path){
    return new Promise((resolve,reject)=>{
        require('fs').readFile(path,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

mineReadFile('./context.txt').then(
    data=>console.log(data.toString()),//上面这个匿名函数永远是resolve
    err=>throw err //下面的匿名函数永远是reject
)

