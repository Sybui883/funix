import React from "react";
import { Routes, Route } from "react-router-dom";
import dateFormat from "dateformat";
import { STAFFS } from "./staffs";

function ChiTietNV() {
  return (
    <div id="chitietNV">
      <img src={STAFFS.image} alt={STAFFS.name} />
      <h1>Họ và tên: {STAFFS.name}</h1>
      <p>Ngày sinh: {dateFormat(STAFFS.doB, "dd/mm/yyyy")}</p>
      <p>Ngày vào công ty: {dateFormat(STAFFS.startDate, "dd/mm/yyyy")}</p>
      <p>Phòng ban: {STAFFS.department.name}</p>
      <p>Số ngày nghỉ còn lại: {STAFFS.annualLeave}</p>
      <p>Số ngày đã làm thêm: {STAFFS.overTime}</p>
    </div>
  );
}

export default ChiTietNV;
