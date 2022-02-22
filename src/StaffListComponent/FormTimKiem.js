import React, { Component } from "react";

export default class FormTimKiem extends Component {
  render() {
    return (
      <div>
        <div className="form-group row">
          <input style={{margin: '10px', height: '50px', borderRadius: '5px', fontSize: '30px'}} type="text"
            className="form-control col-8 "
          />
          <button style={{margin: '10px', borderRadius: '5px', fontSize: '30px'}} className=" text-white bg-primary col-2">
            Tìm
          </button>
        </div>
      </div>
      
    );
  }
}
