import { GET_API } from "../constants/StafflistConst"

const initialState = {
  staffs : []
}

export default (state = initialState, {action}) => {
  switch (action.type) {

  case GET_API:
    return { ...state}

  default:
    return {...state}
  }
}


