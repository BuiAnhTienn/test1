const nvct = require('./nhanvienchinhthuc')
const nvtv = require('./nhanvienthoivu')

let Person1 = new nvct('tien', 113)// 
let Peson2 = new nvtv('khue',114)

Person1.getInfo()
let luong = Person1.getSalary()
console.log(luong)

Peson2.getInfo()
let luong2 = Peson2.getSalary()
console.log(luong2)