import VideoMutedFix from '@components/Index/VideoMutedFix';

const Banner = ({title}) => {
    return (
        <div className="relative h-32 sm:h-40">
        <VideoMutedFix
          className="absolute w-full h-full object-cover z-0"
          videoSrc="/video/TwistedDreamsHaunt.mp4"
        />

        <div className="absolute w-full h-full bg-black bg-opacity-70 z-10"></div>
        <div className="absolute w-full h-full flex justify-center items-center z-20">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl  xl:text-5xl 2xl:text-6xl text-textlogo font-custom2 font-bold text-center ">
            {title}
          </h1>
        </div>
      </div>
    )
}

export default Banner
