import * as ActionTypes from './ActionTypes';

export const StaffsSalary = (state = {
        isLoading: true, 
        errMess: null,
        staffsSalary: []
    }, action) => {
        switch (action.type) {
          case ActionTypes.ADD_BANGLUONG:
            return {
              ...state,
              isLoading: false,
              errMess: null,
              staffsSalary: action.payload,
            };

          case ActionTypes.BANGLUONG_LOADING:
            return {
              ...state,
              isLoading: true,
              errMess: null,
              staffsSalary: [],
            };

          case ActionTypes.BANGLUONG_FAILED:
            return {
              ...state,
              isLoading: false,
              errMess: action.payload,
              staffsSalary: [],
            };

          default:
            return state;
        }
}