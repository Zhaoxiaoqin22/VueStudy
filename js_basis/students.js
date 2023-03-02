class Student{
    constructor(name,score){
        this.name = name;
        this.score = score;
    }
    introduce(){
        console.log('我是'+this.name+',成绩为'+this.score)
    }
}

class Teacher{
    constructor(name,subject) {
        this.name = name;
        this.subject = subject
    }

    introduce(){
        console.log('我是'+this.name+',教'+this.subject)
    }
}


const  studnet = new Student('狗蛋',99)
studnet.introduce()