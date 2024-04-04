const NhanVien = require('./nhanvien');
class nhanvienthoivu extends NhanVien{
        constructor(name,id){
            super(name,id)
        }

        luongphucap(){
            return 0;
        }
}
module.exports = nhanvienthoivu;