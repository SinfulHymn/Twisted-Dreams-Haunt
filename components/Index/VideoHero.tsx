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
            <div className="relative min-h-[500px] sm:min-h-[600px] bg-hero bg-cover bg-center -z-50 overflow-hidden">
                {/* black overlay for the image
                    absolute
                    w-full 
                */}
                <div className="absolute w-full h-full bg-black bg-opacity-70 -z-40"></div>

                <AutoPlaySilentVideo
                    className="absolute w-full h-full object-cover -z-30"
                    videoSrc="/video/TwistedDreamsHaunt.mp4"
                />

                <div className="absolute w-full h-full flex justify-center items-center -z-20 ">
                    <Image
                        src={"/images/tdh-web.png"}
                        alt={"banner"}
                        width={350}
                        height={350}
                        className="absolute w-[240px] opacity-[.92] sm:w-[350px]"
                        quality={100}
                    />
                </div>
                <div className="absolute top-[70%] right-0  left-0 z-20">
                    <h1 className="text-4xl sm:text-6xl text-white font-custom font-bold text-center">
                    </h1>
                </div>
            </div>
        </>
    );
}

export default VideoHero;
