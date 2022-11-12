import VideoMutedFix from '@components/Index/VideoMutedFix';

const Banner = ({title}) => {
    return (
        <div className="relative h-40 sm:h-56">
        <VideoMutedFix
          className="absolute w-full h-full object-cover z-0"
          videoSrc="/video/TwistedDreamsHaunt.mp4"
        />

        <div className="absolute w-full h-full bg-black bg-opacity-70 z-10"></div>
        <div className="absolute w-full h-full flex justify-center items-center z-20">
          <h1 className="text-4xl sm:text-6xl text-textlogo font-custom2 font-bold text-center ">
            {title}
          </h1>
        </div>
      </div>
    )
}

export default Banner
