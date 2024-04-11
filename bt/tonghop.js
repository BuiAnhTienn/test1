// let myArray = [1,2,3,4,5,6,7,8,9,10]

// let mangchan = []
// let mangle = []

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     if (element % 2 == 0) {
//         mangchan.push(element)
//     } else {
//         mangle.push(element)
//     }
// }

// console.log(mangchan)
// console.log(mangle)


// class Person {
//     constructor(name , age){
//         this.name = name
//         this.age = age
//     }

//     getInfo(){
//         console.log('My name:',this.name)
//         console.log('My age:',this.age)
//     }
// }

// let teo = new Person('tien',18)
// teo.getInfo()

class Person{
    _animal;
    get animal() {
        return this._animal;
    }
    set animal(value) {
        this._animal = value;
    }
}
let name1 = new Person();
name1.animal = 'Yellow'
console.log(name1.animal)