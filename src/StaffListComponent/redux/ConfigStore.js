import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Staffs } from './NhanVienReducer';
import { Departments } from './PhongBanReducer';
import { StaffsSalary } from './BangLuongReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      departments: Departments,
      staffsSalary: StaffsSalary,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};