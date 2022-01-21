import { Route, Routes, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NhanVien from "./StaffListComponent/NhanVien";
import BangLuong from "./StaffListComponent/BangLuong";
import PhongBan from "./StaffListComponent/PhongBan";
import Contact from "./StaffListComponent/Contact";
import Home from "./StaffListComponent/Home";
import { STAFFS } from "./StaffListComponent/staffs";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Nhân Viên</Link>
        <Link to="/phong-ban">Phòng Ban</Link>
        <Link to="/bang-luong">Bảng Lương</Link>
      </nav>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phong-ban" element={<PhongBan />} />
        <Route path="/bang-luong" element={<BangLuong />} />
      </Routes>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
