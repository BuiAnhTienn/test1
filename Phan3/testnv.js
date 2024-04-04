
const nhanvienchinhthuc = require("./nhanvienchinhthuc");
const nhanvienthoivu = require("./nhanvienthoivu");

let teo = new nhanvienchinhthuc('Teo',111);
let ti = new nhanvienthoivu('ti',112);

teo.laythongtinnhanvien();
ti.laythongtinnhanvien();

let teoSalary =  teo.luongphucap();
let tiSalary = ti.luongphucap();

console.log('Lương của tèo:',teoSalary)
console.log('Lương của tí:',tiSalary)

teo.hđlđ();