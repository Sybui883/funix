import React, { Component } from "react";
import { NavbarBrand } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import BangLuong from "../BangLuong/BangLuong";
import ChiTietNhanVien from "../ChiTietNhanVien/ChiTietNhanVien";
import NhanVien from "../NhanVien/NhanVien";
import PhongBan from "../PhongBan/PhongBan";

export default class Nav extends Component {
  render() {
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

      <Routes>
          <Route path="/" element={<NhanVien />} />
          <Route path="/nhan-vien/:staffId" element={<ChiTietNhanVien />} />
          <Route path="/phong-ban" element={<PhongBan />} />
          <Route path="/bang-luong" element={<BangLuong />} />
      </Routes>
    </div>
    );
  }
}
