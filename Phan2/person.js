class Person{
    constructor(name , age , sex){
        this.name = name
        this.age = age
        this.sex = sex
    }

    getInfo(){
        console.log('My nam is',this.name)
        console.log('My age :',this.age)
        console.log('My sex:',this.sex)
    }

}
let info = new Person('Ti',18,'Danong')
info.getInfo()