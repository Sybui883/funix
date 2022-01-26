import React from "react";
import { useParams} from "react-router-dom";
import dateFormat from "dateformat";
import { STAFFS } from "./staffs";

function ChiTietNV() {
  const params = useParams();
  const staff = STAFFS.find(staff => staff.id.toString() === params.staffId)
  return (
    <div id="chitietNV">
      <img src={staff?.image} alt={staff?.name} />
      <h1>Họ và tên: {staff?.name}</h1>
      <p>Ngày sinh: {dateFormat(staff?.doB, "dd/mm/yyyy")}</p>
      <p>Ngày vào công ty: {dateFormat(staff?.startDate, "dd/mm/yyyy")}</p>
      <p>Phòng ban: {staff?.department.name}</p>
      <p>Số ngày nghỉ còn lại: {staff?.annualLeave}</p>
      <p>Số ngày đã làm thêm: {staff?.overTime}</p>
    </div>
  );
}

export default ChiTietNV;
