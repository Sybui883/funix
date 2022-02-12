import { Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, Nav, NavLink } from "reactstrap";
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Ristorante Con Fusion"
            />
          </NavbarBrand>
        <Link className="navbar-brand nhanvien" to="/"><span className="fa fa-users fa-lg"></span>
          Nhân Viên
        </Link>
        <Link className="navbar-brand phongban" to="/phong-ban"><span className="fa fa-address-card fa-lg"></span>
          Phòng Ban
        </Link>
        <Link className="navbar-brand bangluong" to="/bang-luong"><span className="fa fa-money-bill fa-lg"></span>
          Bảng Lương
        </Link>
      </nav>
    </div>
  );
}

export default Header;
