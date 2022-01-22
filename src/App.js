import { Route, Routes, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NhanVien from "./StaffListComponent/NhanVien";
import BangLuong from "./StaffListComponent/BangLuong";
import PhongBan from "./StaffListComponent/PhongBan";
import Contact from "./StaffListComponent/Contact";
import { STAFFS } from "./StaffListComponent/staffs";
import ChiTietNV from "./StaffListComponent/ChiTietNV";
import Header from "./StaffListComponent/Header";

function App() {
  return (
    <div className="App">
      <nav>
        <Header />
        <Link to="/">Nhân Viên</Link>
        <Link to="/phong-ban">Phòng Ban</Link>
        <Link to="/bang-luong">Bảng Lương</Link>
      </nav>
     
      <Routes>
        <Route path="/" element={<NhanVien />} />
        <Route path="/phong-ban" element={<PhongBan />} />
        <Route path="/bang-luong" element={<BangLuong />} />
        <Route path="/nhan-vien" element={<ChiTietNV />} />
      </Routes>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
