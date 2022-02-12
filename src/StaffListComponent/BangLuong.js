import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { STAFFS } from "./staffs";
import "./css/BangLuong.css";

function BangLuong() {
	const basicSalary = 3000000;
	const overTimeSalary = 200000;
	return (
		<div>
      <h1>Bảng Lương</h1>
      <hr/>
      <Breadcrumb>
        <BreadcrumbItem><Link to='/'>Nhân Viên</Link></BreadcrumbItem>
        <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
      </Breadcrumb>
      {STAFFS.map((STAFF) => (
		  <div id="BangLuong" key={STAFF.id}>
          <h1>{STAFF.name}</h1>
          <p>Mã số nhân viên: {STAFF.id}</p>
          <p>Hệ số lương: {STAFF.salaryScale.toFixed(0)}</p>
          <p>Số giờ làm thêm: {STAFF.overTime}</p>
          <p id="Luong">Lương: {((STAFF.salaryScale.toFixed(0) * basicSalary) + (STAFF.overTime * overTimeSalary)).toLocaleString()} VND</p>
        </div>
      ))}
    </div>
  );
}

export default BangLuong;
