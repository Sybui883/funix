import React from "react";
import { Link, Outlet } from "react-router-dom";
import { STAFFS } from "./staffs";
import "./css/NhanVien.css";
import { Breadcrumb, Nav } from "reactstrap";

function NhanVien() {
 
  return (
    <div id="home">
      <h1>Nhân viên</h1>
      <hr/>
      <Breadcrumb>
      </Breadcrumb>
      {STAFFS.map((STAFFS) => {
        return (
          <div key={STAFFS.id} id="nhanVien">
            <Link to={`/nhan-vien/${STAFFS.id}`}>
              <img src={STAFFS.image} alt={STAFFS.name} />
              {STAFFS.name}
            </Link>
            <Outlet />
          </div>
        );
      })}
    </div>
  );
}

export default NhanVien;
