import React from "react";
import dateFormat from "dateformat";
import { Link, Route, Routes } from "react-router-dom";
import { STAFFS } from "./staffs";
import "./NhanVien.css";
import ChiTietNV from "./ChiTietNV";

function NhanVien(STAFFS) {
  return (
    <div id="nhanVien">
        <Link to="nhan-vien"><img src={STAFFS.image} alt={STAFFS.name} />
          {STAFFS.name}</Link>

        <Routes>
          <Route path={STAFFS.id} element={<ChiTietNV />} />
        </Routes>
    </div>
  );
}

export default NhanVien;
