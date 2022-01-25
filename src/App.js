import { Route, Routes, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NhanVien from "./StaffListComponent/NhanVien";
import BangLuong from "./StaffListComponent/BangLuong";
import PhongBan from "./StaffListComponent/PhongBan";
import Contact from "./StaffListComponent/Footer";
import Home from "./StaffListComponent/Home";
import { STAFFS } from "./StaffListComponent/staffs";
import ChiTietNV from "./StaffListComponent/ChiTietNV";
import Header from "./StaffListComponent/Header";
import Footer from "./StaffListComponent/Footer";

function App(STAFFS) {
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<NhanVien />} />
        <Route path="/phong-ban" element={<PhongBan />} />
        <Route path="/bang-luong" element={<BangLuong />} />
        <Route path={`/nhan-vien/${STAFFS.id}`} element={<ChiTietNV />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
