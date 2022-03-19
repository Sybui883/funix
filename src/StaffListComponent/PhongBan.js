import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDepart({ depart }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 mt-3 mb-3 w3-animate-top">
      <Card>
        <Link to={`departments/${depart.id}`}>
          <h3 className="p-3">{depart.name}</h3>
        </Link>
        <CardBody>
          <CardText>
            <strong>Số lượng nhân viên: {depart.numberOfStaff}</strong>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

const PhongBan = (props) => {
  const depart = props.departments.departments.map((depart) => {
    return <RenderDepart key={depart.id} depart={depart} />;
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staffs">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <h3>Phòng Ban</h3>
      </div>
      <hr />
      <div className="row">{depart}</div>
    </div>
  );
};

export default PhongBan;
