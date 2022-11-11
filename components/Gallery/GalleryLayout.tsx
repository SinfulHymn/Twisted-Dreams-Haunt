import Map from "@components/Index/Test"
import Image from "next/image";
import Link from "next/link";
import styles from "@components/Index/Map.module.css";
import VideoMutedFix from "@components/Index/VideoMutedFix";
const center = [33.8529527, -118.0314395];
const zoom = 15;

const AboutLayout = () => {
    return (
        <div className="py-6">
            <div className="relative h-56">

                <VideoMutedFix
                    className="absolute w-full h-full object-cover z-0"
                    videoSrc="/video/TwistedDreamsHaunt.mp4" />
                <div className="absolute w-full h-full bg-black bg-opacity-70 z-10"></div>
                <div className="absolute w-full h-full flex justify-center items-center z-20">
                    <h1 className="text-4xl sm:text-6xl text-textlogo font-custom2 font-bold text-center ">
                        Gallery
                    </h1>


                </div>
            </div>
           

           
        </div>
    );
};

export default AboutLayout;
