import NhanVien from "./NhanVien";
import { STAFFS } from "./staffs";

function Home() {
   
  return (
    <div id="home">
      {STAFFS.map((STAFFS) => (
        <NhanVien 
            key={STAFFS.id}
            img={STAFFS.image}
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
