const xiyou = ['monkTang','Goku','8Nos','sandMonk']

let iterator = xiyou[Symbol.iterator]();

const classes = {
    name:"尚硅谷一班",
    stat:['newBorn','ready','fluency'],
    [Symbol.iterator](){
        let index = 0;
        let _this = this
        return {
            next:function () {
                if(index<_this.stat.length){
                    index++
                    return {value:this.stat[index],done:false}
                }

                return
            }
        }

    }
}




/*
for(let i of xiyou){
    console.log(i)
}*/

/*
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
*/

/*
while(iterator.next() != null&&iterator.next()!=undefined){
    console.log(iterator.next)
}*/
