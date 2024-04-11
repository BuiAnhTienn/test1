class Employee{
    constructor(name , id){
        this.name = name
        this.id = id
    }

    getSalary(){
        return 5000;
    }
    getInfo(){
        console.log( 'My name:',this.name)
        console.log(' My ID:',this.id)

    }
}
module.exports = Employee;