import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchNhanVien = () => (dispatch) => {
  dispatch(NhanVienLoading(true));

  return fetch(baseUrl + "staffs")
    .then((response) => response.json())
    .then((staff) => dispatch(addNhanVien(staff)));
};

export const NhanVienLoading = () => ({
  type: ActionTypes.NHANVIEN_LOADING,
});

export const NhanVienFailed = (errmess) => ({
  type: ActionTypes.NHANVIEN_FAILED,
  payload: errmess,
});

export const addNhanVien = (staff) => ({
  type: ActionTypes.ADD_NHANVIEN,
  payload: staff,
});

export const fetchPhongBan = () => (dispatch) => {
  dispatch(PhongBanLoading(true));

  return fetch(baseUrl + "departments")
    .then((response) => response.json())
    .then((phong) => dispatch(addPhongBan(phong)));
};

export const PhongBanLoading = () => ({
  type: ActionTypes.PHONGBAN_LOADING,
});

export const PhongBanFailed = (errmess) => ({
  type: ActionTypes.PHONGBAN_FAILED,
  payload: errmess,
});

export const addPhongBan = (phong) => ({
  type: ActionTypes.ADD_PHONGBAN,
  payload: phong,
});

export const fetchBangLuong = () => (dispatch) => {
  dispatch(BangLuongLoading(true));

  return fetch(baseUrl + "staffsSalary")
    .then((response) => response.json())
    .then((luong) => dispatch(addBangLuong(luong)));
};

export const BangLuongLoading = () => ({
  type: ActionTypes.BANGLUONG_LOADING,
});

export const BangLuongFailed = (errmess) => ({
  type: ActionTypes.BANGLUONG_FAILED,
  payload: errmess,
});

export const addBangLuong = (luong) => ({
  type: ActionTypes.ADD_BANGLUONG,
  payload: luong,
});
