import React, { Component } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { DEPARTMENTS, STAFFS } from "../staffs";
import Modal from "../Modal/Modal";
import Search from "../Search/Search";

var staffID = STAFFS.length - 1;

export default class NhanVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      keyWord: "",
    };
  }

  // Tìm Kiếm
  onSearch = (keyWord) => {
    this.setState({ keyWord: keyWord });
  };

  onSubmit = (data) => {
    var { staffs } = this.state;
    var newStaff = {
      id: this.generateID(),
      name: data.name,
      doB: data.doB,
      salaryScale: data.salaryScale,
      startDate: data.startDate,
      department: {
          id: '',
          name: data.department
      },
      annualLeave: data.annualLeave,
      overTime: data.overTime,
      image: '/assets/images/alberto.png'
  };
  // data.id = this.generateID();
  // data.image = '/assets/images/alberto.png';
  staffs.push(newStaff);
  this.setState({staffs: staffs});

    localStorage.setItem("staffs", JSON.stringify(staffs));


  };

  sID() {
    return (staffID += 1);
  }

  generateID() {
    return this.sID();
  }

  // render danh sách nhân viên
  renderNhanVien = ((staff) => {
    return (
      <Card>
        <Link to={`/nhan-vien/${staff.id}`}>
          <CardImg
            src={staff.image}
            alt={staff.name}
            title={staff.department.name}
          />
        </Link>
        <h5 className="text-center w3-tooltip">{staff.name}</h5>
      </Card>
    );
  })

  render() {
    // in lại danh sách sau khi tìm kiếm
    const danhSachNhanVien = this.state.staffs
      .filter((staff) => {
        return staff.name.toLowerCase().indexOf(this.state.keyWord) !== -1;
      })

      // mapping danh sách nhân viên
      .map((staff) => {
        return (
          <div
            key={staff.id}
            className="col-12 col-sm-4 col-md-2 mt-3 mb-3 w3-animate-opacity w3-hover-opacity"
          >
            {this.renderNhanVien(staff)}
          </div>
        );
      });

    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-4">Nhân viên</h1>
          <div className="col-3 my-2 text-center">
            <Modal onSubmit={this.onSubmit} />
          </div>
          <div className="col-4">
            <Search onSearch={this.onSearch} />
          </div>
        </div>
        <hr />
        <div className="container-fluid row">{danhSachNhanVien}</div>
        
      </div>
    );
  }
}
