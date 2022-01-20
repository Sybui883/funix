import React from "react";
import dateFormat from "dateformat";
import { Link, Route, Routes } from "react-router-dom";
import { STAFFS } from "./staffs";


function NhanVien(STAFFS) {
  return (
    <div id="nhanVien">
        <img src={STAFFS.image} width='10px' alt={STAFFS.name} loading="lazy" />
          {STAFFS.name}
    </div>
  );
}

export default NhanVien;
