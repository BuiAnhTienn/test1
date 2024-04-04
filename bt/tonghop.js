// let myArray = [ 1,2,3,4,5,6,7,8,9,10]

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
//         this.name =name
//         this.age = age
//     }

//     getInfo(){
//         console.log('My name :',this.name)
//         console.log('My Age :',this.age)
//     }
// }
// let teo = new Person('Tien',18);
// teo.getInfo();

class Animal {
    _eyeAnimal;
    get eyeAnimal() {
        return this._eyeAnimal;
    }
    set eyeAnimal(value) {
        this._eyeAnimal = value;
    }
}
let mai = new Animal();
mai.eyeAnimal = 'Yellow'
console.log(mai.eyeAnimal)