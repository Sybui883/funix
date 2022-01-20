import React from "react";
import dateFormat from "dateformat";
import { Link, Route, Routes } from "react-router-dom";
import { STAFFS } from "./staffs";


function NhanVien() {
  return (
    <div id="nhanVien">
        <img src={STAFFS.image} alt={STAFFS.name} />
          {STAFFS.name}
    </div>
  );
}

export default NhanVien;
