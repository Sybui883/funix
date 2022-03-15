import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import dateFormat from "dateformat";
import { STAFFS } from "../staffs";
import { DEPARTMENTS } from "../departments";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function ChiTietNhanVien() {
  const params = useParams();
  const staff = STAFFS.find((staff) => staff.id.toString() === params.staffId);
  const depart = DEPARTMENTS.find((depart) => depart.id === staff.departmentId) 

  console.log('staffs', staff);

  console.log('abc',depart);
  
  return (
    <Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Nhân Viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{staff?.name}</BreadcrumbItem>
      </Breadcrumb>
      <div className="container-fluid">
        <div className="row m-3">
          <div className="col-3 w3-animate-opacity">
            <img
              style={{ width: "100%" }}
              src={staff?.image}
              alt={staff?.name}
            />
          </div>
          <div className="col-8 w3-container w3-animate-right">
            <h2>Họ và tên: {staff?.name}</h2>
            <p>Ngày sinh: {dateFormat(staff?.doB, "dd/mm/yyyy")}</p>
            <p>
              Ngày vào công ty: {dateFormat(staff?.startDate, "dd/mm/yyyy")}
            </p>
            <p>Phòng ban: {depart?.name}</p>
            <p>Số ngày nghỉ còn lại: {staff?.annualLeave}</p>
            <p>Số ngày đã làm thêm: {staff?.overTime}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ChiTietNhanVien;
