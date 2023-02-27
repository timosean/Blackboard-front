// 필요한 props
// lecture, professor

export const SugangLecture = ({
  name,
  professor,
}: {
  name: string;
  professor: string;
}) => {
  return (
    <div className="w-[22rem] h-14 lg:h-20 flex items-center px-6 justify-between border-l-8 border-l-ku-crimson border bg-white rounded drop-shadow-lg">
      <div className="w-full h-full flex items-center space-x-6">
        <h1 className="font-bold text-xl lg:text-2xl flex items-center">
          {name}
        </h1>
        <h2 className="text-dark-gray h-full flex items-center font-semibold text-base lg:text-lg">
          {professor}
        </h2>
      </div>
      <button className="w-16 py-4 h-6 flex items-center justify-center rounded bg-ku-crimson text-white font-bold">
        신청
      </button>
    </div>
  );
};
