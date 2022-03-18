import { GET_API } from "../constants/StafflistConst"
import { STAFFS } from "../../StaffListComponent/staffs";
import { DEPARTMENTS } from "../../StaffListComponent/departments";


const stateStaffs = {
  staffs : STAFFS,
  departments: DEPARTMENTS,
  keyWord:''
}

const StafflistReducer = (state = stateStaffs, { action }) => {
  switch (action.type) {
    case GET_API: {
      return { ...state };
      break;
    }

    default:
      return { ...state };
  }
};

export default StafflistReducer;


