import React from 'react';
import { Link } from 'react-router-dom'
import { STAFFS } from './staffs';

function NhanVien() {
  return (
    <React.Fragment>
      <div>
        <Link to='nhan-vien/'>
        <img src={STAFFS.image} alt={STAFFS.name}></img>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default NhanVien;
