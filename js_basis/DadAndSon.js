class Person{
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}

class Sensei extends Person{
    constructor(name,score) {
        super(name);
        this.score = name;
    }

    introduce(){
        console.log(this.name+this.score)
    }
}

class Stu extends  Person{
    constructor(name,subject) {
        super(name);
        this.subject =subject;
    }

    introduce(){
        console.log(this.name + this.subject)
    }
}



var stu = new Stu("狗蛋",99);
console.log(Stu.prototype)
console.log(stu.age)
console.log(stu.hasOwnProperty('age'))


