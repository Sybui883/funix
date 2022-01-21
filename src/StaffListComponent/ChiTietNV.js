import { Routes, Route } from "react-router-dom";
import NhanVien from "./NhanVien";
import { STAFFS } from "./staffs"
import Home from "./Home";

function ChiTietNV(STAFFS) {
    return (
        <div id="chitietNV">
            <img src={this.image} alt={this.name} />
            <h1>Họ và tên: {STAFFS.name}</h1>
        </div>
    )
}
<Routes>
    <Route path={STAFFS.id} element={<ChiTietNV />} />
</Routes>

export default ChiTietNV;