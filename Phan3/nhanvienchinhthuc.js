const Employee = require("./nhanvien");

class nvct extends Employee{
    constructor(name , id){
        super(name , id)
    }

    moi(){
        console.log(this.name + " Đến phòng Hr")
    }
}

module.exports = nvct;