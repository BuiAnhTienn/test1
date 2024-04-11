const Employee = require("./nhanvien");

class nvtv extends Employee {
    constructor(name , id){
        super(name,id)
    }

    getSalary(){
        return 0 ;
    }
}

module.exports = nvtv;