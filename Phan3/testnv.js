let nvct = require('./nhanvienchinhthuc')
let nvtv = require('./nhanvienthoivu')

let Person1 = new nvct('tien',113)
let Person2 = new nvtv('khue',114)

Person1.getInfo()
let salary = Person1.getSalary()
console.log(salary)
Person2.getInfo()
let salary1 = Person2.getSalary()
console.log(salary1)