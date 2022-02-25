import React, { Component } from "react";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      doB: "",
      salaryScale: "1",
      startDate: "",
      department: { name: "" },
      annualLeave: "0",
      overTime: "0",
      image: "/assets/images/alberto.png",
      keyWord: "",
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
    var {
      name,
      doB,
      salaryScale,
      startDate,
      department,
      annualLeave,
      overTime,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {/* Button trigger modal */}
          <button
            style={{ fontWeight: "bold", marginLeft: "30%" }}
            className="btn btn-dark"
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
                  <div className="row my-3">
                    <label htmlFor="name" className="col-5">
                      Tên
                    </label>
                    <input
                      id="name"
                      className="col-6"
                      type="text"
                      name="name"
                      defaultValue={name}
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
                      defaultValue={doB}
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
                      defaultValue={startDate}
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
                      defaultValue={department.name}
                      onChange={this.onChange}
                    >
                      <option>Sale</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>IT</option>
                      <option>Finance</option>
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
                      defaultValue={salaryScale}
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
                      defaultValue={annualLeave}
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
                      defaultValue={overTime}
                      onChange={this.onChange}
                      name="overTime"
                      required
                    ></input>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      Thêm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
