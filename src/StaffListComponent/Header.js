import { Navbar, NavbarBrand } from "reactstrap";
import { Routes, Route, Link } from "react-router-dom";
import "./css/Header.css"

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <Link className="navbar-brand nhanvien" to="/">
          Nhân Viên
        </Link>
        <Link className="navbar-brand phongban" to="/phong-ban">
          Phòng Ban
        </Link>
        <Link className="navbar-brand bangluong" to="/bang-luong">
          Bảng Lương
        </Link>
      </nav>
    </div>
  );
}

export default Header;
