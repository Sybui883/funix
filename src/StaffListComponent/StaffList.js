import React from "react";
import { STAFFS, DEPARTMENTS, ROLE } from "./staffs";
import dateFormat from "dateformat";
import { useState } from "react";

function StaffList(STAFFS) {
  const [show, setShow] = useState(false);

  return (
      <div id="content">
        <button onClick={() => setShow(!show)}>{STAFFS.name}</button>
        {show && (
          <div id="staffs">
            <h2>Họ và tên: {STAFFS.name}</h2>
            <p>Ngày sinh: {dateFormat(STAFFS.doB, "dd/mm/yyyy")}</p>
            <p>
              Ngày vào công ty: {dateFormat(STAFFS.startDate, "dd/mm/yyyy")}
            </p>
            <p>Phòng ban: {STAFFS.department}</p>
            <p>Chức danh: {STAFFS.role}</p>
            <p>Số ngày nghỉ còn lại: {STAFFS.annualLeave}</p>
            <p>Số ngày đã làm thêm: {STAFFS.overTime}</p>
          </div>
        )}
      </div>
  );
}
export default StaffList;
