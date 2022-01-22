import React from "react";
import { Link } from "react-router-dom";
import { STAFFS } from "./staffs";
import "./NhanVien.css";
import ChiTietNV from "./ChiTietNV";

function NhanVien() {
  return (
    <React.Fragment>
      {STAFFS.map((STAFFS) => (
        <div key={STAFFS.id} id="nhanVien" className="offset-sm-1">
          <Link to={`/nhan-vien/${STAFFS.id}`}>
            <img src={STAFFS.image} alt={STAFFS.name} />
            {STAFFS.name}
          </Link>
        </div>
      ))}

    </React.Fragment>
  );
}

export default NhanVien;
