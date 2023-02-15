import axiosInstance from "../utils";
import { User } from "@/interfaces/user";

// 회원가입 API
export const signUpAPI = async (signUpData: User) => {
  try {
    const res = await axiosInstance.post("/user", signUpData);
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 내 정보 가져오기
export const fetchMyInfo = async () => {
  try {
    const res = await axiosInstance.get("/user");
    return res;
  } catch (e) {
    console.error(e);
  }
};
