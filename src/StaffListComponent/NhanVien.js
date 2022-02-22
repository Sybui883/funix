import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";
import { STAFFS } from "./staffs";
import "./css/NhanVien.css";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Modal } from "bootstrap";
import ThemNhanVien from "./ThemNhanVien";
import FormTimKiem from "./FormTimKiem";

class NhanVien extends Component {
  state = {
    value: "",
  };

  // Thay đổi giá trị input
  handleChangeValue = (newChange) => {
    this.setState({
      value: newChange,
    });
  };

  //Modal thêm nhân viên
  themNhanVien = () => {};

  render() {
    return (
      <div id="home">
        <div className="row">
          <h1 className="col-4">Nhân viên</h1>
          <div className="col-2">
            <ThemNhanVien />
          </div>
          <div className="col-6">
            <FormTimKiem />
          </div>
        </div>
        <hr />
        {STAFFS.map((STAFFS) => {
          return (
            <div key={STAFFS.id} id="nhanVien">
              <Card>
                <Link to={`/nhan-vien/${STAFFS.id}`}>
                  <CardImg
                    className="card-img-top w-150 h-150"
                    src={STAFFS.image}
                    alt={STAFFS.name}
                  ></CardImg>
                  <CardTitle className="card-text"> {STAFFS.name}</CardTitle>
                </Link>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NhanVien;
