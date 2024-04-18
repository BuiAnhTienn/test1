// let myArray = [1,2,3,4,5,6,7,8,9,10]
// let mangchan = []
// let mangle = []

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     if (element % 2 ==0) {
//         mangchan.push(element)
//     } else {
//         mangle.push(element)
        
//     }
// }

// console.log(mangchan)
// console.log(mangle)


// class Person{
//     _eyeAnimal;
//     get eyeAnimal() {
//         return this._eyeAnimal;
//     }
//     set eyeAnimal(value) {
//         this._eyeAnimal = value;
//     }
// }

// let teo = new Person()
// teo.eyeAnimal = 'Yellow'
// console.log(teo.eyeAnimal)

// let name1 = '    tien'
// let name2 = 'Bui'
// let catdau = name1.trim()
// let congchuoi = name2.concat(catdau)

// let catchuoi = catdau.split('')

// let indexx = catdau.indexOf('a')
// console.log(indexx)

let myArray =[1,'tien',2,'bui',3,'anh']

myArray.push('tinh')

myArray.pop()

myArray[1] = 'bui'
myArray[3] = 'anh'
myArray[5] = 'tien'

myArray.splice(0,5)

let tim = myArray.indexOf('i')
console.log(myArray)