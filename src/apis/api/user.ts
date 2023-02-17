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
