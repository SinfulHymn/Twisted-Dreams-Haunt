import { useState } from "react";
import Image from "next/image";

const VideoHero = () => {

    return (
        <>

            <div className="relative min-h-[500px] sm:min-h-[600px] bg-hero bg-cover bg-center -z-50 overflow-hidden">

                <div className="absolute  w-full h-full bg-black bg-opacity-60 -z-40">

                    <div className="absolute  top-2/4  w-auto mx-auto h-full z-50">
                        <h1 className="text-6xl sm:text-6xl text-white font-custom font-bold text-center">Land Closest To<br /> Hell</h1>
                        <p className="text-white text-center">Orange County, CA</p>

                        <div className="flex justify-center items-center mt-4">
                            <button className="bg-main-red text-white px-4 py-2 rounded-md font-custom font-bold">Book Now</button>
                        </div>
                    </div>

                    <div className="relative w-full h-full m-auto">
                        <Image
                            src={"/images/tdh-vector.png"}
                            alt={"banner"}
                            width={350}
                            height={350}
                            className="m-auto"
                        />
                    </div>
                </div>
            </div>


        </>
    );
}

export default VideoHero;
