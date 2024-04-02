

class Person {
    constructor(name , age ){
        this.name = name
        this.age = age
    }

    getInfo(){
        console.log('My name',this.name)
        console.log('My age',this.age)
    }
}

let ti = new Person('tien',18);
ti.getInfo()


// Định nghĩa một lớp (class) JavaScript có tên là Animal
class Animal {
    // Định nghĩa một thuộc tính không công khai (_eyeAnimal) cho đối tượng Animal
    _eyeAnimal;

    // Phương thức getter cho thuộc tính eyeAnimal
    get eyeAnimal() {
        return this._eyeAnimal;//Dòng này gán giá trị value được truyền vào cho thuộc tính _eyeAnimal. Khi phương thức setter này được gọi, nó sẽ gán giá trị mới cho _eyeAnimal.
    }

    // Phương thức setter cho thuộc tính eyeAnimal
    set eyeAnimal(value) {
        this._eyeAnimal = value; //Dòng này trả về giá trị của thuộc tính _eyeAnimal. Khi phương thức getter này được gọi, nó sẽ trả về giá trị hiện tại của _eyeAnimal.
    }
}

// Tạo một thể hiện mới của lớp Animal và gán nó cho biến vit
let vit = new Animal();

// Gán giá trị 'Yellow' cho thuộc tính eyeAnimal của đối tượng vit
vit.eyeAnimal = 'Yellow';

// Truy xuất và in ra giá trị của thuộc tính eyeAnimal của đối tượng vit
console.log(vit.eyeAnimal); // Kết quả: Yellow



class ania{
    set ani(value){
        this._ani = value
    }
    get ani(){
        return this._ani;
    }
}
let may = new ania();
may.ani = 'Yeal'
console.log(may.ani)