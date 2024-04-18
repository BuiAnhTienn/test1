class Employee {
    constructor(name , id ){
        this.name = name
        this.id = id
    }

    getSalary(){
        return 4000;
    }

    getInfo(){
        console.log('My name:',this.name)
        console.log('My id:',this.id)
    }

}

module.exports = Employee;