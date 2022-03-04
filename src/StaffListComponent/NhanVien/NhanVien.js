import React, { Component } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { DEPARTMENTS, STAFFS } from "../staffs";
import Modal from "../Modal/Modal";
import Search from "../Search/Search";

var xID = 16;

export default class NhanVien extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      keyWord: "",
    };
  }

  onSearch = (keyWord) => {
    this.setState({ keyWord: keyWord });
  };

  onSubmit = (data) => {
    var { staffs } = this.state;
    data.id = this.generateID();
    data.image = "/assets/images/alberto.png";
    staffs.push(data);
    this.setState({ staffs: staffs });

    localStorage.setItem("staffs", JSON.stringify(staffs));
  };

  s4() {
    return (xID += 1);
  }

  generateID() {
    return this.s4();
  }

  renderNhanVien = ((staff) => {
    return (
      <Card>
        <Link to={`/nhan-vien/${staff.id}`}>
          <CardImg src={staff.image} alt={staff.name} />
        </Link>
        <h5 className="text-center">{staff.name}</h5>
      </Card>
    );
  })

  render() {
    const danhSachNhanVien = this.state.staffs
      .filter((staff) => {
        return staff.name.toLowerCase().indexOf(this.state.keyWord) !== -1;
      })
      .map((staff) => {
        return (
          <div key={staff.id} className="col-12 col-sm-4 col-md-2 mt-3 mb-3">
            {this.renderNhanVien(staff)}
          </div>
        );
      });

    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-3">Nhân viên</h1>
          <div className="col-3 m-2">
            <Modal onSubmit={this.onSubmit} />
          </div>
          <div className="col-5">
            <Search onSearch={this.onSearch} />
          </div>
        </div>
        <hr />
        <div className="container-fluid row">
          {danhSachNhanVien}
        </div>
      </div>
    );
  }
}
