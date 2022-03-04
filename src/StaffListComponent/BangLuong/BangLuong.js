import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { STAFFS } from "../staffs";

export default class BangLuong extends Component {
  render() {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
        <div className="container-fluid row">
          {STAFFS.map((STAFF) => (
            <div style={{border: '1px solid grey', margin: '10px'}} className="col-3" id="BangLuong" key={STAFF.id}>
              <h1>{STAFF.name}</h1>
              <p className="px-3">Mã số nhân viên: {STAFF.id}</p>
              <p className="px-3">Hệ số lương: {STAFF.salaryScale.toFixed(0)}</p>
              <p className="px-3">Số giờ làm thêm: {STAFF.overTime}</p>
              <h5
                style={{
                  border: "1px solid grey",
                  borderTopLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  backgroundColor: "lightGray",
                  padding: '10px'
                }}
                id="Luong"
              >
                Lương:
                {(
                  STAFF.salaryScale.toFixed(0) * basicSalary +
                  STAFF.overTime * overTimeSalary
                ).toLocaleString()}
                VND
              </h5>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
