import React, { Component } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { STAFFS } from "../staffs";

export default class NhanVien extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div id="home">
          <h1>Nhân viên</h1>
          <hr />
          <div className="container-fluid row">
            {STAFFS.map((STAFFS) => {
              return (
                <div className="col-2 my-2 text-center" key={STAFFS.id} id="nhanVien">
                  <Card>
                    <Link to={`/nhan-vien/${STAFFS.id}`}>
                      <CardImg
                        className="card-img-top w-150 h-150"
                        src={STAFFS.image}
                        alt={STAFFS.name}
                      ></CardImg>
                      <CardTitle className="card-text">
                        {" "}
                        {STAFFS.name}
                      </CardTitle>
                    </Link>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
