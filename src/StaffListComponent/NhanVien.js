import React from "react";
import { Link, Outlet } from "react-router-dom";
import { STAFFS } from "./staffs";
import "./css/NhanVien.css";

function NhanVien() {
  return (
    <div id="home">
      <h1>Nhân viên</h1>
      <hr />
      {STAFFS.map((STAFFS) => {
        return (
         <div key={STAFFS.id} id="nhanVien">
                <div className="card text-black bg-white">
                  <Link to={`/nhan-vien/${STAFFS.id}`}>
                    <img
                      className="card-img-top w-150 h-150"
                      src={STAFFS.image}
                      alt={STAFFS.name}
                    />
                    <p className="card-text">{STAFFS.name}</p>
                  </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NhanVien;
