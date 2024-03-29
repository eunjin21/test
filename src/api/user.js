import { instance } from "../utils/axios";
import { Cookies } from "react-cookie";
export const cookies = new Cookies();

export const RegisterUser = async (params) => {
  try {
    const res = await instance.post(`/auth/signup`, params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const idCheck = async (params) => {
  try {
    const res = await instance.get(`/auth/check/${params}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return err.response.data;
  }
};

export const logoutUser = async () => {
  try {
    const res = await instance.post(`/auth/logout`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 로그인
export const LoginUser = async (params) => {
  try {
    const res = await instance.post(`/auth/login`, params);
    if (res.data.statusCode === 200) {
      window.localStorage.setItem("isLogin", "true");
      window.localStorage.setItem("corpLogo", res.data.data.corpImage);
      window.localStorage.setItem("corpName", res.data.data.corpName);
    }
    return res.data;
  } catch (err) {
    return err.response;
  }
};
