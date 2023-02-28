import axiosInstance from "../utils";
import { Lecture, LectureRegister } from "@/interfaces/lecture";

export const fetchAllLectureList = async () =>
  await axiosInstance.get("/lectures");

export const createNewLectureAPI = async (data: LectureRegister) =>
  await axiosInstance.post("/lecture/professor", data);
