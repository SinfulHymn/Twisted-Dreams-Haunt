import React, { useEffect, useRef } from "react";
import Image from "next/image";

const VideoHero = () => {

    return (
        <>

            <div className="relative min-h-[500px] sm:min-h-[600px] bg-hero bg-cover bg-center -z-50 overflow-hidden">


                <div className="absolute w-full h-full bg-black bg-opacity-70 -z-40">

                <video 
                className="absolute w-full h-full object-cover"
                autoPlay
                loop
                muted
                id="background-video"
                >
                 <source src={'/video/TwistedDreamsHaunt.mp4'} type='video/mp4'/>
                </video>

                    <div className=" w-full h-full flex justify-center items-center -z-30 ">
                        <Image
                            src={"/images/tdh-vector.png"}
                            alt={"banner"}
                            width={350}
                            height={350}
                            className="absolute top-10 m-auto w-[250px] sm:w-[350px]"
                            quality={100}
                        />
                    </div>
                    <div className="absolute top-[70%] right-0  left-0 z-20">
                        <h1 className="text-4xl sm:text-6xl text-white font-custom font-bold text-center">
                        
                        <p className="text-textlogo drop-shadow-2xl">
                        Land Closest To<br /> Hell
                        </p>
                        </h1>
                        


                    </div>

                </div>
            </div>


        </>
    );
}

export default VideoHero;
