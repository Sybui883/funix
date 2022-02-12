import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { DEPARTMENTS } from "./staffs";
import './css/PhongBan.css';

function PhongBan() {
  return (
    <div>
     <Breadcrumb>
        <BreadcrumbItem><Link to='/'>Nhân Viên</Link></BreadcrumbItem>
        <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
      </Breadcrumb>
      {DEPARTMENTS.map((department) => (
        <div key={department.id} id="phongBan">
          <h1>{department.name}</h1>
          <p>Số lượng nhân viên: {department.numberOfStaff}</p>
        </div>
      ))}
    </div>
  );
}

export default PhongBan;
