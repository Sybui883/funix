import React, { Component, Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardTitle,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link, useParams } from "react-router-dom";
import { STAFFS } from "../staffs";
import Modal from "../Modal/Modal";
import Search from "../Search/Search";

export default class NhanVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      STAFFS: [],
    };
  }

  onSubmit = (data) => {
    var { staffs } = this.state.STAFFS;
    data.id = Date.now();
    STAFFS.push(data);
    this.setState({
      staffs: staffs,
    });
    localStorage.setItem("STAFFS", JSON.stringify(STAFFS));
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-3">Nhân viên</h1>
          <div className="col-3 m-2">
            <Modal onSubmit={this.onSubmit} inNhanVien={this.inNhanVien} />
          </div>
          <div className="col-5">
            <Search />
          </div>
        </div>
        <hr />
        <div className="container-fluid row">
          {STAFFS.map((STAFFS) => {
            return (
              <div
                className="col-2 my-2 text-center"
                key={STAFFS.id}
                id="nhanVien"
              >
                <Card onClick={this.renderNhanVien}>
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
      </div>
    );
  }
}
