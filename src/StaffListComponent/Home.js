import NhanVien from "./NhanVien";
import { STAFFS } from "./staffs";

function Home() {
   
  return (
    <div id="home">
      <h1>Nhân Viên</h1>
      {STAFFS.map((STAFFS) => (
        <NhanVien 
            key={STAFFS.id}
            image={STAFFS.image}
            name={STAFFS.name}
            doB={STAFFS.doB}
            salaryScale={STAFFS.salaryScale}
            startDate={STAFFS.startDate}
            department={STAFFS.department}
            annualLeave={STAFFS.annualLeave}
            overTime={STAFFS.overTime}
        />
      ))}
    </div>
  );
}

export default Home;
