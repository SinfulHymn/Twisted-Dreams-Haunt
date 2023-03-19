export default function InfoBanner({ data }) {
  const { TopHeading, BottomHeading } = data;
  return (
    <>
      <div className=" w-full bg-zinc-900">
        <div className="flex h-full flex-col items-center justify-center  p-1.5 text-center">
          <h1 className=" font-custom2 text-xl font-extrabold text-[#BABABA] sm:text-2xl md:text-3xl">
            {TopHeading}
          </h1>
          <h2 className=" font-custom2 text-base font-bold text-[#EA6112] sm:text-xl md:text-2xl">
            {BottomHeading}
          </h2>
        </div>
      </div>
    </>
  );
}
