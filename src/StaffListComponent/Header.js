import { Navbar, NavbarBrand } from "reactstrap";
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar>
        <Link to="/">Nhân Viên</Link>
        <Link to="/phong-ban">Phòng Ban</Link>
        <Link to="/bang-luong">Bảng Lương</Link>
      </Navbar>
    </div>
  );
}

export default Header;
