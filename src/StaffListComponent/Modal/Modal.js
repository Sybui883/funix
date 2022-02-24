import React, { Component } from "react";
import { DEPARTMENTS, STAFFS } from "../staffs";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      doB: "",
      salaryScale: "1",
      startDate: "",
      department: {name: ''},
      annualLeave: "0",
      overTime: "0",
      image: "/assets/images/alberto.png",
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div>
        {/* Button trigger modal */}
        <button
          style={{ fontWeight: "bold", marginLeft: "30%" }}
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#modelId"
        >
          +
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Thêm Nhân Viên</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
              <form onSubmit={this.onSubmit}>
                  <div className="row my-3">
                    <label htmlFor="ten" className="col-5">
                      Tên
                    </label>
                    <input
                      id="ten"
                      className="col-6"
                      type="text"
                      name="name"
                      defaultValue={this.state.name}
                      onChange={this.onChange}
                      required
                    ></input>
                  </div>
                  <div className="row my-3">
                    <label htmlFor="doB" className="col-5">
                      Ngày Sinh
                    </label>
                    <input
                      id="doB"
                      className="col-6"
                      type="date"
                      name="doB"
                      defaultValue={this.state.doB}
                      onChange={this.onChange}
                      required
                    ></input>
                  </div>
                  <div className="row my-3">
                    <label htmlFor="startDate" className="col-5">
                      Ngày Vào Công Ty
                    </label>
                    <input
                      id="startDate"
                      className="col-6"
                      type="date"
                      name="startDate"
                      defaultValue={this.state.startDate}
                      onChange={this.onChange}
                      required
                    ></input>
                  </div>
                  <div className="row my-3">
                    <label htmlFor="department" className="col-5">
                      Phòng Ban
                    </label>
                    <select
                      id="department"
                      className="col-6"
                      name="department"
                      defaultValue={this.state.department.name}
                      onChange={this.onChange}
                    >
                      {DEPARTMENTS.map((department) => {
                        return (
                          <option key={department.id}>{department.name}</option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="row my-3">
                    <label htmlFor="salaryScale" className="col-5">
                      Hệ Số Lương
                    </label>
                    <input
                      id="salaryScale"
                      className="col-6"
                      type="text"
                      name="salaryScale"
                      defaultValue={this.state.salaryScale}
                      onChange={this.onChange}
                      required
                    ></input>
                  </div>
                  <div className="row my-3">
                    <label htmlFor="annualLeave" className="col-5">
                      Số Ngày Nghỉ Còn Lại
                    </label>
                    <input
                      id="annualLeave"
                      className="col-6"
                      type="text"
                      defaultValue={this.state.annualLeave}
                      onChange={this.onChange}
                      name="annualLeave"
                      style={{ lineHeight: "0" }}
                      required
                    ></input>
                  </div>
                  <div className="row my-3">
                    <label htmlFor="overTime" className="col-5">
                      Số Ngày Đã Làm Thêm
                    </label>
                    <input
                      id="overTime"
                      className="col-6"
                      type="text"
                      defaultValue={this.state.overTime}
                      onChange={this.onChange}
                      name="overTime"
                      required
                    ></input>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    aria-hidden="false"

                  >
                    Thêm
                  </button>
              </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
