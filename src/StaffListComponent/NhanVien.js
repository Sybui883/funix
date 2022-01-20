import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { STAFFS } from "./staffs";


function NhanVien() {
  return (
    <div id="staffs">
        <img src={STAFFS.image} alt={STAFFS.name} />
          {STAFFS.name}
        <p>{STAFFS.name}</p>
    </div>
  );
}

export default NhanVien;
