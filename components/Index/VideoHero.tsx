import React, { useEffect, useRef } from "react";
import Image from "next/image";
import AutoPlaySilentVideo from "./VideoMutedFix";

const VideoHero = () => {
  return (
    <>
      {/* structure: everything inside here is relative to this div
                            min-height 500px mobile
                            min-height non mobile 600px
                            bg of the div is hero
                            center and cover background images 
            */}
      <div className="relative min-h-[500px] lg:min-h-[600px]    z-0 overflow-hidden">
        {/* <Image
                src="/images/landscape-web.png"
                alt="Twisted Dreams Haunt"
                fill
                className="absolute top-0 left-0 w-full h-full object-cover"
                quality={100}
                /> */}

        {/* black overlay for the image
                    absolute
                    w-full 
                */}
        {/* <div className="absolute w-full h-full bg-black bg-opacity-80 z-10"></div> */}

        <AutoPlaySilentVideo
          className="absolute w-full h-full object-cover z-20"
          videoSrc="/video/TwistedDreamsHaunt.mp4"
        />

        <div className="absolute w-full h-full flex justify-center items-center z-30 ">
          <Image
            src={"/images/tdh-small-web.png"}
            alt={"banner"}
            width={500}
            height={500}
            className="absolute w-[200px] sm:w-[240px] opacity-[.92] lg:w-[320px]"
            // quality={100}

            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
        <div className="absolute bottom-4 right-0 left-0 z-40 px-10">
          <h1 className="text-4xl sm:text-6xl text-textlogo font-custom font-bold text-center ">
            Thank you for a great Haunt!
          </h1>
        </div>
      </div>
    </>
  );
};

export default VideoHero;
