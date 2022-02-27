import React, { Component } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { DEPARTMENTS, STAFFS } from "../staffs";
import Modal from "../Modal/Modal";
import Search from "../Search/Search";

export default class NhanVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      STAFFS: [],
      keyWord: "",
      filter: { name: "" },
    };
  }

  // Lọc ký tự
  onFilter = (keyWord) => {
    console.log(keyWord);
    this.setState({
      filter: {
        name: keyWord,
      },
    });
  };

  // Thêm Nhân Viên
  onSubmit = (data) => {
    var { name, doB, startDate, annualLeave, overTime, department } =
      this.state.STAFFS;
    data.id = Date.now();
    data.department.id = Date.now().toFixed(1);
    this.setState({
      name: name,
      doB: doB,
      startDate: startDate,
      department: department,
      annualLeave: annualLeave,
      overTime: overTime,
    });
    localStorage.setItem("STAFFS", JSON.stringify(STAFFS));
    STAFFS.push(data);
  };

  // Tìm Kiếm
  onSearch = (keyWord) => {
    this.setState({
      keyWord: keyWord,
    });
  };
  // Render lại sau khi ấn tìm
  render() {
    var { keyWord } = this.state;

    // Điều kiện của keyword
    if (keyWord) {
      STAFFS = STAFFS.filter((staff) => {
        return staff.name.toLowerCase().indexOf(keyWord);
      });
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-3">Nhân viên</h1>
          <div className="col-3 m-2">
            <Modal onSubmit={this.onSubmit} inNhanVien={this.inNhanVien} />
          </div>
          <div className="col-5">
            <Search onSearch={this.onSearch} />
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
