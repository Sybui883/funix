import { Routes, Route } from "react-router-dom";
import NhanVien from "./NhanVien";
import { STAFFS } from "./staffs"
import Home from "./Home";

function ChiTietNV(STAFFS) {
    return (
        <div id="chitietNV">
            <img src={STAFFS.image} alt={STAFFS.name} />
            <h1>Họ và tên: {STAFFS.name}</h1>
        </div>
    )
}


export default ChiTietNV;