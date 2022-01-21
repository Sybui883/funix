import { Routes, Route } from "react-router-dom";
import NhanVien from "./NhanVien";
import { STAFFS } from "./staffs"

function ChiTietNV(STAFFS) {
    return (
        <div id="chitietNV">
            <img src={STAFFS.image} alt={STAFFS.name} />
        </div>
    )
}
<Routes>
    <Route path="/nhan-vien/" element={<ChiTietNV />} />
</Routes>

export default ChiTietNV;