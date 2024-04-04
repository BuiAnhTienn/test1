const NhanVien = require('./nhanvien');
class nhanvienchinhthuc extends NhanVien{
        constructor(name,id){
            super(name,id)
        }


        hđlđ(){
            console.log(this.name +'Cần đi đến phòng nhân sự nhé')
        }

}
module.exports = nhanvienchinhthuc;