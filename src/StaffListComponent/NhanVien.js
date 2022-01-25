import React from "react";
import { Link } from "react-router-dom";
import { STAFFS } from "./staffs";
import "./css/NhanVien.css";
import ChiTietNV from "./ChiTietNV";

function NhanVien() {
  return (
    <div id="home">
      <h1>Nhân viên</h1>
      <hr/>
      {STAFFS.map((STAFFS) => (
        <div key={STAFFS.id} id="nhanVien" >
          <Link to={`/nhan-vien/${STAFFS.id}`}>
            <img src={STAFFS.image} alt={STAFFS.name} />
            {STAFFS.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NhanVien;
