import VideoMutedFix from "@components/Index/VideoMutedFix";

const Banner = ({ title }) => {
  return (
    <div className="relative h-32 sm:h-40">
      <VideoMutedFix
        className="absolute z-0 h-full w-full object-cover"
        videoSrc="/video/TwistedDreamsHaunt.mp4"
      />

      <div className="absolute z-10 h-full w-full bg-black bg-opacity-70"></div>
      <div className="absolute z-20 flex h-full w-full items-center justify-center">
        <h1 className="text-center font-custom2 text-2xl  font-bold text-main-orange xs:text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl ">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
