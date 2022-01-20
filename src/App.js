import { Route, Routes, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NhanVien from "./StaffListComponent/NhanVien";
import BangLuong from "./StaffListComponent/BangLuong";
import PhongBan from "./StaffListComponent/PhongBan";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/nhan-vien">Nhân Viên</Link>
        <Link to="/phong-ban">Phòng Ban</Link>
        <Link to="/bang-luong">Bảng Lương</Link>
      </nav>
      <Routes>
        <Route path="/nhan-vien" element={<NhanVien />} />
        <Route path="/phong-ban" element={<PhongBan />} />
        <Route path="/bang-luong" element={<BangLuong />} />
      </Routes>
    </div>
  );
}

export default App;
