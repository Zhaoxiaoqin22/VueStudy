function * generator(){
    yield '一只没有耳朵';
    yield '一只没有尾巴';
    yield '真奇怪';
}

/*function  * generator2() {
    console.log('dog eggs')
}*/

//generator2()
//generator2().next()
var gen1 = generator()
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())

console.log('\n')

for(let v of generator()){
    console.log(v)
}
