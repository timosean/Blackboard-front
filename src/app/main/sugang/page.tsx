"use client";

import { SugangLecture } from "./components";
import { fetchAllLectureList } from "@/apis/api/lecture";
import { Lecture } from "@/interfaces/lecture";
import { useState, useEffect } from "react";

const dummyLectures = [
  {
    name: "감정과삶",
    professor: "최기홍",
  },
];

export default function Sugang() {
  const [lectureList, setLectureList] = useState<Lecture[]>([]);

  useEffect(() => {
    fetchAllLectureList().then((res) => setLectureList(res.data as Lecture[]));
  }, []);

  return (
    <>
      <h1 className="text-3xl h-[105px] flex items-center font-bold border-b-4">
        수강신청
      </h1>
      <div className="w-full flex mt-6">
        {dummyLectures.map((lecture) => (
          <SugangLecture name={lecture.name} professor={lecture.professor} />
        ))}
        {lectureList.map((lecture) => (
          <SugangLecture
            name={lecture.name}
            professor={lecture.professorName}
          />
        ))}
      </div>
    </>
  );
}
