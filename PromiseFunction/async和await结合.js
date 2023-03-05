const fs = require('fs');
const util = require('util')
//将readFile转化为promise函数
const mineReadFile = util.promisify(fs.readFile)

path1 = '../Files/gaozi.txt'
path2 = '../Files/goudan.txt'
path3 = '../Files/yangzi.txt'



async function myReadFile(){
    try {
        let data1 = await mineReadFile(path1)//得到promise成功的结果
        let data2 = await mineReadFile(path2)
        let data3 = await mineReadFile(path3)
        console.log(data1);
        console.log(data2);
        console.log(data3)
    }catch (e) {
        console.log(e.code)
    }
}

myReadFile()

