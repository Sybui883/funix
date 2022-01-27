import React from "react";
import { DEPARTMENTS } from "./staffs";
import './css/phongBan.css';

function PhongBan() {
  return (
    <div>
      <h1>Phòng Ban</h1>
      <hr/>
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
