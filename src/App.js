import logo from "./logo.svg";
import { STAFFS, DEPARTMENTS, ROLE } from "./StaffListComponent/staffs";
import "./App.css";
import StaffList from "./StaffListComponent/StaffList";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <h1>Ứng dụng quản lý nhân sự v1.0</h1>
      <div id="wrapper">
        {STAFFS.map((STAFFS) => (
          <StaffList
            key={STAFFS.id}
            name={STAFFS.name}
            doB={STAFFS.doB}
            startDate={STAFFS.startDate}
            department={STAFFS.department.name}
            annualLeave={STAFFS.annualLeave}
            overTime={STAFFS.overTime}
            role={STAFFS.role}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
