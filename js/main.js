import MainService from "./MainService.js";
import Validation from "./Validation.js";
const service = new MainService();
const vali = new Validation();

let renderDoList = () => {
    let doList = "";
    service.DanhSachViecLam.map((doSomething, index) => {
        doList += `
            <li>
                <span>${doSomething}</span>
                <button class ="btn">
                    <i onclick ="deleteWork('${index}')" class="fa fa-trash-alt btn btn-danger"></i>
                    <i onclick = "addWorkComplete('${index}')" class="fa fa-check-circle btn btn-warning"></i>
                </button>
            </li>
        `;
    });
    document.querySelector("#todo").innerHTML = `<h5 style="color: red;" class = "my-2">Những việc cần làm:</h5>` + doList;
};

let themMoiViec = () => {
    let getELE = document.querySelector("#newTask").value;
    let isvali = true;

    isvali &= vali.kiemTraRong(getELE, "tb", "Vui lòng thêm việc cần làm!");
    if (isvali) {
        service.themNhanVienMoi(getELE);
        swal("Good job!", "Thêm Thành Công!", "success");
        document.querySelector(".card__add #newTask").value = "";
        renderDoList();
    }
};
window.themMoiViec = themMoiViec;

let renderWorkComple = () => {
    let listCompele = "";
    service.DSVLComplete.map((doComplete, index) => {
        listCompele += ` 
            <li>
                <span>${doComplete}</span>
                <button class ="btn">
                    <i onclick = "deleteWorkComple('${index}')" class="fa fa-trash-alt btn btn-danger"></i>
                    <i class="fa fa-check-circle btn btn-success"></i>
                </button>
            </li>
        `;
    });
    document.querySelector("#completed").innerHTML = `<h5 style="color: red;" class = "my-2">Những việc đã hoàn thành:</h5>` + listCompele;

};
let addWorkComplete = (index) => {
    let workELE = service.DanhSachViecLam[index];
    service.themMoiViecComple(workELE);

    swal("Congratulations!", "You had a great day!", "success");

    renderWorkComple();

};
window.addWorkComplete = addWorkComplete;


let deleteWork = (index) => {
    swal({
        title: "Are you sure?",
        text: "Bạn có chắc muốn xóa không??",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("OK! Bạn đã xóa thành công!", {
                    icon: "success",
                });
                service.deleteWork(index);
                renderDoList();
            } else {
                swal("Vẹn nguyên như ban đầu :v ");
            }
        });
};
window.deleteWork = deleteWork;

let deleteWorkComple = (index) => {
    swal({
        title: "Are you sure?",
        text: "Bạn có chắc muốn xóa không?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("OK! Bạn đã xóa thành công!", {
                    icon: "success",
                });
                service.deleteWorkComple(index);
                renderWorkComple();
            } else {
                swal("Vẫn vẹn nguyên như ban đầu :v ");
            }
        });
};
window.deleteWorkComple = deleteWorkComple;


document.getElementById("two").addEventListener("click", () => {
    service.sapXepWork(1);
    renderDoList();
});

document.getElementById("three").addEventListener("click", () => {
    service.sapXepWork(2);
    renderDoList();
});

