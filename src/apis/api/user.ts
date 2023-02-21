import axiosInstance from "../utils";
import { User } from "@/interfaces/user";

// 회원가입 API
export const signUpAPI = async (signUpData: User) => {
  const res = await axiosInstance.post("/user", signUpData);
  return res.data;
};

// 내 정보 가져오기
export const fetchMyInfo = async () => {
  const res = await axiosInstance.get("/user");
  return res.data;
};

// 로그아웃
export const logOutAPI = async () => {
  await axiosInstance.post("/user/logout").then((res) => {
    if (res.status === 200) {
      alert("로그아웃 되었습니다.");
      sessionStorage.removeItem("user");
      window.location.href = "http://localhost:3000/";
    }
  });
};
