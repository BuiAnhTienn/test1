
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
vit.eyeAnimal = 'Yellowe';

// Truy xuất và in ra giá trị của thuộc tính eyeAnimal của đối tượng vit
console.log(vit.eyeAnimal); // Kết quả: Yellow



class Animal1 {
    set eyeaniaml (value){
        this._eyeAnimal = value
    }
    get eyeAnimal1 (){
        return this._eyeAnimal1;
    }
}

let vit1 = new Animal1();
vit1.eyeAnimal = 'Yellow'
console.log(vit1.eyeAnimal)

class Animal2 {
    _eyeAnima2;
    get eyeAnima2() {
        return this._eyeAnima2;
    }
    set eyeAnima2(value) {
        this._eyeAnima2 = value;
    }
}
let sam = new Animal2();
sam.eyeAnima2 = 'Black'
console.log(sam.eyeAnima2)