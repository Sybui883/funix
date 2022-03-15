import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardTitle } from "reactstrap";
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
            <Card
              style={{ border: "1px solid grey"}}
              className="col-3 my-3 mx-3 w3-animate-zoom"
              id="BangLuong"
              key={STAFF.id}
            >
              <h3 className="py-1">{STAFF.name}</h3>
              <p className="px-3">Mã số nhân viên: {STAFF.id}</p>
              <p className="px-3">
                Hệ số lương: {STAFF.salaryScale.toFixed(0)}
              </p>
              <p className="px-3">Số giờ làm thêm: {STAFF.overTime}</p>
              <h5
                style={{
                  borderTop: "1px solid grey",
                  borderLeft: "1px solid grey",
                  borderTopLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  backgroundColor: "lightGreen",
                  padding: "10px",
                }}
                id="Luong"
              >
                Lương:
               <mark>{(
                    STAFF.salaryScale.toFixed(0) * basicSalary +
                    STAFF.overTime * overTimeSalary
                  ).toLocaleString()}</mark>
                VND
              </h5>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
