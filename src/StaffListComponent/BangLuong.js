import React from "react";
import {
  Card,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  CardFooter,
  CardHeader,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderBangLuong({ staff }) {
  const basicSalary = 3000000;
  const overTimeSalary = 200000;
  const salary =
    staff.salaryScale * basicSalary + staff.overTime * overTimeSalary;
  return (
    <div className="col-12 col-sm-6 col-md-4 mt-3 mb-3">
      <Card className="w3-animate-zoom">
        <CardHeader>
          <h3>{staff.name}</h3>
        </CardHeader>
        <CardBody>
          <CardText>Mã nhân viên: {staff.id}</CardText>
          <CardText>Hệ số lương: {staff.salaryScale}</CardText>
          <CardText>Số giờ đã làm thêm: {staff.overTime}</CardText>
        </CardBody>
        <CardFooter className="lag m-2 bg-success px-3">
          <h5>
            Lương: <mark>{salary.toLocaleString()}</mark> đồng
          </h5>
        </CardFooter>
      </Card>
    </div>
  );
}

const BangLuong = (props) => {
  const Luong = props.staffs.staffs.map((staff) => {
    return <RenderBangLuong key={staff.id} staff={staff} />;
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staffs">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <h3>Bảng Lương</h3>
      </div>
      <hr />
      <div className="row">{Luong}</div>
    </div>
  );
};

export default BangLuong;
