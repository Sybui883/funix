import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import dateFormat from "dateformat";
import { STAFFS } from "./staffs";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "./css/ChiTietNV.css";

function ChiTietNV() {
  const params = useParams();
  const staff = STAFFS.find((staff) => staff.id.toString() === params.staffId);
  return (
    <Fragment>
      <Breadcrumb>
        <BreadcrumbItem><Link to='/'>Nhân Viên</Link></BreadcrumbItem>
        <BreadcrumbItem active>{staff?.name}</BreadcrumbItem>
      </Breadcrumb>
      <div id="chitietNV">
        <div id="img">
          <img src={staff?.image} alt={staff?.name} />
        </div>
        <div id="content">
          <h1>Họ và tên: {staff?.name}</h1>
          <p>Ngày sinh: {dateFormat(staff?.doB, "dd/mm/yyyy")}</p>
          <p>Ngày vào công ty: {dateFormat(staff?.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {staff?.department.name}</p>
          <p>Số ngày nghỉ còn lại: {staff?.annualLeave}</p>
          <p>Số ngày đã làm thêm: {staff?.overTime}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default ChiTietNV;
