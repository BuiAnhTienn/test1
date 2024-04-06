class Employee {
    constructor(name , id , salary){
        this.name = name
        this.id = id
    }

    getSalary(){
        return 5000;
    }

    getInfoEmployee(){
        console.log('My name:',this.name)
        console.log('My id :',this.id)
    }
}
module.exports = Employee;