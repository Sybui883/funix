import React, { Component } from "react";
import { Col, Form, FormGroup } from "reactstrap";

export default class Modal extends Component {
  render() {
    return (
      <div>
        {" "}
        <div>
          {/* Button trigger modal */}
          <button
            style={{ width: "50px", margin: "10px 50px", fontSize: "25px" }}
            type="button"
            className="btn bg-dark text-white"
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
                  <div style={{fontSize: '20px'}} className="container-fluid">
                    <Form>
                      <FormGroup row>
                        <label htmlFor="ten" className="col-4">
                          Tên
                        </label>
                        <Col className="col-8">
                          <input style={{width:'100%', padding: '0 5px'}} type="text" id="ten"></input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <label htmlFor="ngaysinh" className="col-4">
                         Ngày Sinh
                        </label>
                        <Col className="col-8">
                          <input style={{width:'100%', padding: '0 5px'}} type="date" id="ngaysinh"></input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <label htmlFor="ngayvao" className="col-4">
                         Ngày Vào Công Ty
                        </label>
                        <Col className="col-8">
                          <input style={{width:'100%', padding: '0 5px'}} type="date" id="ngayvao"></input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <label htmlFor="phongban" className="col-4">
                         Phòng Ban
                        </label>
                        <Col className="col-8">
                          <select style={{width:'100%', padding: '0 5px'}} id="phongban">
                            <option>Sale</option>
                            <option>HR</option>
                            <option>Marketing</option>
                            <option>IT</option>
                            <option>Finance</option>
                          </select>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <label htmlFor="luong" className="col-4">
                         Hệ Số Lương
                        </label>
                        <Col className="col-8">
                          <input style={{width:'100%', padding: '0 5px'}} type="text" id="luong" value='1'></input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <label htmlFor="ngaynghi" className="col-4">
                        Số Ngày Nghỉ Còn Lại
                        </label>
                        <Col className="col-8">
                          <input style={{width:'100%', padding: '0 5px'}} type="text" id="ngaynghi" value='0'></input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <label htmlFor="lamthem" className="col-4">
                         Số Ngày Đã Làm Thêm
                        </label>
                        <Col className="col-8">
                          <input style={{width:'100%', padding: '0 5px'}} type="text" id="lamthem" value='0'></input>
                        </Col>
                      </FormGroup>
                    </Form>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
                    Thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
