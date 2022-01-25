import { STAFFS } from "./staffs";
import "./css/BangLuong.css";

function BangLuong() {
	const basicSalary = 3000000;
	const overTimeSalary = 200000;
	return (
		<div>
      {STAFFS.map((STAFF) => (
		  <div id="BangLuong" key={STAFF.id}>
          <h1>{STAFF.name}</h1>
          <p>Mã số nhân viên: {STAFF.id}</p>
          <p>Hệ số lương: {STAFF.salaryScale.toFixed(0)}</p>
          <p>Số giờ làm thêm: {STAFF.overTime}</p>
          <p id="Luong">Lương: {(STAFF.salaryScale.toFixed(0) * basicSalary) + (STAFF.overTime * overTimeSalary)}</p>
        </div>
      ))}
    </div>
  );
}

export default BangLuong;
