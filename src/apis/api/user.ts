import axiosInstance from "../utils";
import { FormValues } from "@/app/auth/signup/components";

// 회원가입 API
export const signUpAPI = async (signUpData: FormValues) => {
  try {
    const res = await axiosInstance.post("/user", signUpData);
    return res;
  } catch (e) {
    console.error(e);
  }
};
