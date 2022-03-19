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
      image: "/assets/images/alberto.png",
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
        <h6 className="text-center m-1">{staff.name}</h6>
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
          <div
            key={staff.id}
            className="col-12 col-sm-4 col-md-2 mt-3 mb-3 w3-animate-opacity w3-hover-opacity"
          >
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
          <div className="row mt-3">
            <div className="col-4">
              <h3>Nhân Viên</h3>
            </div>
            <div className="col-4 text-center">
              <ThemNhanVien onSubmit={this.onSubmit} />
            </div>
            <div className="col-4">
              <Search onSearch={this.onSearch} />
            </div>
          </div>
          <hr />
          <div className="row">{NhanVien}</div>
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps)(NhanVien));
