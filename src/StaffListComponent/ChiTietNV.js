import React from "react";
import { Routes, Route } from "react-router-dom";
import { STAFFS } from "./staffs";

function ChiTietNV() {
  return (
        <div key={STAFFS.id} id="chitietNV">
          <img src={STAFFS.image} alt={STAFFS.name} />
          <h1>Họ và tên: {STAFFS.name}</h1>
          <p>Ngày sinh: {STAFFS.doB}</p>
          <p>Ngày vào công ty: {STAFFS.startDate}</p>
          <p>Phòng ban: {STAFFS.department.name}</p>
          <p>Số ngày nghỉ còn lại: {STAFFS.annualLeave}</p>
          <p>Số ngày đã làm thêm: {STAFFS.overTime}</p>
        </div>
      )
};


export default ChiTietNV;
