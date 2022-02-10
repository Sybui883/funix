import { Navbar, NavbarBrand } from "reactstrap";
import { Routes, Route, Link } from "react-router-dom";
import "./css/Header.css"

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          Nhân Viên
        </Link>
        <Link className="navbar-brand" to="/phong-ban">
          Phòng Ban
        </Link>
        <Link className="navbar-brand" to="/bang-luong">
          Bảng Lương
        </Link>
          <form className="form-inline search">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 text-white"
              type="submit"
            >
              Search
            </button>
          </form>
      </nav>
    </div>
  );
}

export default Header;
