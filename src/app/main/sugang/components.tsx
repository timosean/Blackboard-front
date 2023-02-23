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
    <div className="w-full h-20 border-l-8 border-l-ku-crimson border bg-white rounded drop-shadow-lg flex items-center px-6 space-x-3">
      <h1 className="font-bold text-lg">{name}</h1>
      <h2>{professor}</h2>
      <button>신청</button>
    </div>
  );
};
