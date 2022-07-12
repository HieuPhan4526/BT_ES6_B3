export default class MainService {
    constructor() {
        this.DanhSachViecLam = [];
        this.DSVLComplete = [];

    }
    themNhanVienMoi(viecMoi) {
        this.DanhSachViecLam = [...this.DanhSachViecLam, viecMoi];
    }

    themMoiViecComple(work) {
        this.DSVLComplete = [...this.DSVLComplete, work];
    }

    timKiemViTri(index) {
        for (let viTri in this.DanhSachViecLam) {
            if (viTri == index) {
                return viTri;
            }
        }
    }
    deleteWork(index) {
        var viTriXoa = this.timKiemViTri(index);
        this.DanhSachViecLam.splice(viTriXoa, 1);
    }
    deleteWorkComple(index) {
        var viTriXoa = this.timKiemViTri(index);
        this.DSVLComplete.splice(viTriXoa, 1);
    }
    sapXepWork(type, mang) {
        if (type == 1) {
            this.DanhSachViecLam.sort();
        } else {
            this.DanhSachViecLam.reverse();

        }
    }
}
