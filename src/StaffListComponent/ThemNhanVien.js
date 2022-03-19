import React, { Component } from "react";
import { Form } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    departments: state.departments,
  };
};

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class ThemNhanVien extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }

  onChange = (event) => {
    var target = event.target;
    var value = target.value;
    var name = target.name;

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
        <Form onSubmit={this.onSubmit}>
          {/* Button trigger modal */}
          <button
            className="btn btn-dark btn-lg w3-tooltip"
            data-toggle="modal"
            data-target="#modelId"
          >
            <i className="fa fa-plus-circle"></i>
            <span className="w3-text">
              <em>Thêm Nhân Viên</em>
            </span>
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
                      onChange={this.onChange}
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(30),
                      }}
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
                      value={this.state.tenState}
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
                      value={this.state.tenState}
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
                      className="col-6 w3-select"
                      name="department"
                      onChange={this.onChange}
                      required
                    >
                      <option
                        className="text-center"
                        value=""
                        disabled
                        selected
                      >
                        Chọn Phòng Ban
                      </option>
                      {this.props.departments.departments.map((depart) => (
                        <option key={depart.id} value={depart.id}>
                          {depart.name}
                        </option>
                      ))}
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
                      onChange={this.onChange}
                      name="overTime"
                      required
                    ></input>
                    <button
                      type="submit"
                      className="btn btn-primary mt-5"
                      style={{ margin: "auto" }}
                    >
                      Thêm
                    </button>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(ThemNhanVien));
