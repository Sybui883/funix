import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import Search from "./Search";
import ThemNhanVien from "./ThemNhanVien";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Loading } from "./Loading";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  };
};

class NhanVien extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }

  //lấy keyword cho Search
  onSearch = (keyword) => {
    this.setState({ keyword: keyword });
  };

  // thêm nhân viên
  onSubmit = (data) => {
    var newStaff = {
      name: data.name,
      doB: data.doB,
      salaryScale: data.salaryScale,
      startDate: data.startDate,
      departmentId: data.department,
      annualLeave: data.annualLeave,
      overTime: data.overTime,
      image: "/asset/images/alberto.png",
    };

    //tạo Id cho nhân viên mới thêm
    newStaff.id = this.props.staffs.staffs.length;
    this.props.staffs.staffs.forEach((staff) => {
      if (staff.id > newStaff.id) {
        newStaff.id = staff.id + 1;
      }
    });

    //so sánh ID phòng ban để lấy tên phòng
    this.props.departments.departments.map((depart) => {
      if (data.department === depart.name) {
        return depart.numberOfStaff++, (newStaff.departmentId = depart.id);
      }
    });
    this.props.staffs.staffs.push(newStaff);
    this.setState({ staffs: this.props.staffs.staffs });

    localStorage.setItem("staffs", JSON.stringify(this.props.staffs.staffs));
  };

  renderNhanVien(staff) {
    return (
        <Card>
          <Link to={`/staffs/${staff.id}`}>
            <CardImg src={staff.image} alt={staff.name} />
          </Link>
          <h4 className="nameStaff">{staff.name}</h4>
        </Card>
    );
  }

  render() {
    const NhanVien = this.props.staffs.staffs
      .filter((staff) => {
        return staff.name.toLowerCase().indexOf(this.state.keyword) !== -1;
      })
      .map((staff) => {
        return (
          <div key={staff.id} className="col-12 col-sm-4 col-md-2 mt-3 mb-3">
            {this.renderNhanVien(staff)}
          </div>
        );
      });

    if (this.props.staffs.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.staffs.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.staffs.errMess}</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          {" "}
          <br />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="row">
                <div className="col-10 col-sm-10 col-md-10">
                  <h3>Nhân Viên</h3>
                </div>
                <div className="col-2 col-sm-2 col-md-2">
                  <ThemNhanVien onSubmit={this.onSubmit} />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <Search onSearch={this.onSearch} />
            </div>
          </div>{" "}
          <hr />
          <div className="row">{NhanVien}</div>
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps)(NhanVien));
