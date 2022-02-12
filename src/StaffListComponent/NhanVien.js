import React from "react";
import { Link, Outlet } from "react-router-dom";
import { STAFFS } from "./staffs";
import "./css/NhanVien.css";
import { Card, CardImg, CardTitle } from "reactstrap";

function NhanVien() {
  return (
    <div id="home">
      <h1>Nhân viên</h1>
      <hr />
      {STAFFS.map((STAFFS) => {
        return (
          <div key={STAFFS.id} id="nhanVien">
            <Card>
                <Link to={`/nhan-vien/${STAFFS.id}`}>
                  <CardImg
                    className="card-img-top w-150 h-150"
                    src={STAFFS.image}
                    alt={STAFFS.name}
                  ></CardImg>
                    <CardTitle className="card-text"> {STAFFS.name}</CardTitle>
                </Link>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default NhanVien;
