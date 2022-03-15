import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
import Axios from "axios";
import { Link } from "react-router-dom";
import { STAFFS } from "../staffs";
import { DEPARTMENTS } from "../departments";
import Modal from "../Modal/Modal";
import Search from "../Search/Search";
import {baseUrl} from '../../redux/BaseUrl/BaseUrl'

var staffID = STAFFS.length - 1;

export default class NhanVien extends Component {
  state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
      keyWord: "",
    };
  

    getStaffsList = () => {
      let promise = Axios({
        url: baseUrl,
        method: 'GET'
      })
      promise.then((result) => {
        this.setState({
          staffs: result.data,
          department: result.data
        })
      })
    }

    componentDidMount() {
      this.getStaffsList();
    }

  // Tìm Kiếm
  onSearch = (keyWord) => {
    this.setState({ keyWord: keyWord });
  };

  onSubmit = (data) => {
    var { staffs } = this.state;
    var {department} = this.state
    var newStaff = {
      id: this.generateID(),
      name: data.name,
      doB: data.doB,
      salaryScale: data.salaryScale,
      startDate: data.startDate,
      departmentId: data.department,
      annualLeave: data.annualLeave,
      overTime: data.overTime,
      image: "/assets/images/alberto.png",
    };
    // data.id = this.generateID();
    // data.image = '/assets/images/alberto.png';
    staffs.push(newStaff);
    this.setState({ staffs: staffs,
    department: department });

    localStorage.setItem("staffs", JSON.stringify(staffs));
    localStorage.setItem("department", JSON.stringify(department));
  };
  

  sID() {
    return (staffID += 1);
  }

  generateID() {
    return this.sID();
  }

  // render danh sách nhân viên
  renderNhanVien = (staff) => {
    return (
      <Card className="w3-animate-opacity">
        <Link to={`/nhan-vien/${staff.id}`}>
          <CardImg src={staff.image} alt={staff.name} />
        </Link>
        <h5 className="text-center">{staff.name}</h5>
      </Card>
    );
  };

  render() {
    // in lại danh sách sau khi tìm kiếm
    const danhSachNhanVien = this.state.staffs
      .filter((staff) => {
        return staff.name.toLowerCase().indexOf(this.state.keyWord) !== -1;
      })

      // mapping danh sách nhân viên
      .map((staff) => {
        return (
          <div key={staff.id} className="col-12 col-md-2 my-3">
            {this.renderNhanVien(staff)}
          </div>
        );
      });

    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-3">Nhân viên</h1>
          <div className="col-3 m-2 text-center">
            <Modal onSubmit={this.onSubmit} />
          </div>
          <div className="col-5">
            <Search onSearch={this.onSearch} />
          </div>
        </div>
        <hr />
        <div className="container-fluid row">{danhSachNhanVien}</div>
      </div>
    );
  }
}
