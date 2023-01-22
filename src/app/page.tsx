import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex">
      <div className="w-5/12 h-screen p-3 bg-ku-beige hidden lg:flex md:justify-center md:items-center">
        <Image src="/emblem.svg" width={378} height={534.58} alt="emblem" />
      </div>
      <div className="w-full lg:w-7/12 p-8 md:p-32 lg:p-6 xl:p-16 h-screen bg-ku-crimson flex justify-center items-center">
        <div className="w-full lg:w-10/12 xl:w-9/12 flex flex-col justify-center items-start">
          <h3 className="text-2xl md:text-4xl md:mb-2 font-semibold text-white">
            BlackBoard에 로그인하세요
          </h3>
          <p className="text-lg md:text-2xl text-white">학습관리시스템</p>
          <form method="post" className="mt-8 w-full h-[12.5rem] flex flex-col">
            <input
              type="text"
              name="id"
              placeholder="아이디를 입력하세요"
              className="w-full h-8 md:h-12 md:h-[2.215rem] rounded px-3 text-sm md:text-lg mb-3"
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full h-8 md:h-12 md:h-[2.215rem] rounded px-3 text-sm md:text-lg mb-6"
            />
            <div className="flex justify-start items-center space-x-3">
              <button className="w-[5.75rem] h-[2rem] md:h-[2.5rem] text-white rounded bg-dark-gray text-sm md:text-base font-bold">
                로그인
              </button>
              <button className="w-[5.75rem] h-[2rem] md:h-[2.5rem] text-white rounded bg-dark-gray text-sm md:text-base font-bold">
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
