let myArray = [1,2,3,4,5,6,7,8,9,10]

let mangchan = []

let mangle = []

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if (element % 2 == 0) {
        mangchan.push(element)

    }else{
        mangle.push(element)
    }
}

console.log(mangchan)

console.log(mangle)