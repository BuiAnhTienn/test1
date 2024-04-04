class NhanVien {
    constructor(name , id){
        this.name = name
        this.id = id
    }

    luongphucap(){
        return 500;
    }

    laythongtinnhanvien(){
        console.log('Ten nv:',this.name)
        console.log('Ma NV',this.id)
    }
}

let teo = new NhanVien();
module.exports = NhanVien;