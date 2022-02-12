import { Route, Routes, Switch } from "react-router-dom";
import "./StaffListComponent/css/App.css";
import NhanVien from "./StaffListComponent/NhanVien";
import BangLuong from "./StaffListComponent/BangLuong";
import PhongBan from "./StaffListComponent/PhongBan";
import Home from "./StaffListComponent/Home";
import ChiTietNV from "./StaffListComponent/ChiTietNV";
import Header from "./StaffListComponent/Header";
import Footer from "./StaffListComponent/Footer";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App container-fluid">
      <nav>
        <Header />
      </nav>
      <Routes>
          <Route path="/" element={<NhanVien />} />
            <Route path="/nhan-vien/:staffId" element={<ChiTietNV />} />
         
          <Route path="phong-ban" element={<PhongBan />} />
          <Route path="bang-luong" element={<BangLuong />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/nhan-vien/*" element={<NotFound />} />
        </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
