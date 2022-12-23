import React, { useEffect, useRef } from "react";
import Image from "next/image";
import AutoPlaySilentVideo from "./VideoMutedFix";

const VideoHero = () => {
  return (
    <>
      {/* changes  */}
      {/* structure: everything inside here is relative to this div
                            min-height 500px mobile
                            min-height non mobile 600px
                            bg of the div is hero
                            center and cover background images 
            */}
      <div className="relative z-0 min-h-[500px]    overflow-hidden lg:min-h-[600px]">
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
          className="absolute z-20 h-full w-full object-cover"
          videoSrc="/video/TwistedDreamsHaunt.mp4"
        />

        <div className="absolute z-30 flex h-full w-full items-center justify-center">
          <Image
            src={"/images/tdh-small-web.png"}
            alt={"banner"}
            width={500}
            height={500}
            className="absolute w-[200px] pb-8 opacity-[.92] sm:w-[240px] lg:w-[320px]"
            // quality={100}

            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
        <div className="absolute bottom-0 right-0 left-0 z-30 bg-black bg-opacity-50">
          {/* a div with two divs with text and spacing between them*/}
          <div className="relative flex h-full flex-col justify-center ">
            <div className="flex h-full items-center justify-center space-x-10 px-4 py-1">
              <div className="flex items-center justify-center">
                <h1 className="w-6/12 overflow-hidden text-center text-xs font-bold   text-[#BABABA] sm:text-base md:w-7/12 md:text-xl ">
                  "Twisted Dreams Haunt is a Gritty Grindhouse Nightmare Come to
                  Life"
                </h1>

                <a
                  href="https://www.haunting.net/twisted-dreams-haunt-2022/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-6/12  items-center  justify-center text-xl font-bold text-[#BABABA]"
                >
                  <Image
                    src="/images/Hauntingnet.gif"
                    alt="Haunting.net"
                    width={100}
                    height={100}
                    className=" h-full w-full opacity-[.92] md:w-[300px] "
                    sizes="(max-width: 640px) 100vw, 640px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* thank you message */}
        {/* <div className="absolute bottom-4 right-0 left-0 z-40 px-10">
          <h1 className="text-center font-custom text-4xl font-bold text-textlogo sm:text-5xl md:text-5xl">
            Thank you for a great Haunt!
          </h1>
        </div> */}
      </div>
    </>
  );
};

export default VideoHero;
