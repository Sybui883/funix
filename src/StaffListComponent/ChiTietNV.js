import { Routes, Route } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import NhanVien from "./NhanVien";
import { STAFFS } from "./staffs"

function ChiTietNV(STAFFS) {
    return (
        <div key={STAFFS.id} id="chitietNV">
            <img src={STAFFS.image} alt={STAFFS.name} />
            <h1>Họ và tên: {STAFFS.name}</h1>
        </div>
    )
}


export default ChiTietNV;