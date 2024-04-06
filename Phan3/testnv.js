const nvct = require("./nhanvienchinhthuc");
const nvtv = require("./nhanvienthoivu");

let Person1 = new nvct('teo', 113)
let Person2 = new nvtv('ti', 114)

Person1.getInfoEmployee()
let salary1 = Person1.getSalary()
console.log(salary1)
Person1.moi()



Person2.getInfoEmployee()
let salary2 = Person2.getSalary();
console.log(salary2)