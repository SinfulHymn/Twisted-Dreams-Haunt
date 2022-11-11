import Map from "@components/Index/Test"
import Image from "next/image";
import Link from "next/link";
import styles from "@components/Index/Map.module.css";
import VideoMutedFix from "@components/Index/VideoMutedFix";
const center = [33.8529527, -118.0314395];
const zoom = 15;

const LocationLayout = () => {
    return (
        <div className="py-6">
            <div className="relative h-56">

                <VideoMutedFix
                    className="absolute w-full h-full object-cover z-0"
                    videoSrc="/video/TwistedDreamsHaunt.mp4" />
                <div className="absolute w-full h-full bg-black bg-opacity-70 z-10"></div>
                <div className="absolute w-full h-full flex justify-center items-center z-20">
                    <h1 className="text-4xl sm:text-6xl text-textlogo font-custom2 font-bold text-center ">
                        Location
                    </h1>


                </div>
            </div>
            <Map
                className={styles.locationMap}
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
            >
                {
                    ({ TileLayer, Marker, Popup }) => (
                        <>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            />


                            <Marker position={center}>
                                <Popup>
                                    <Link
                                        className='flex flex-col items-center '
                                        href={"https://goo.gl/maps/Vye9xaDydMJKiuY36"}
                                    >
                                        <Image
                                            className='max-h-[6.25rem] w-auto object-center'
                                            src="/images/tdh-web.png"
                                            alt="Twisted Dreams Haunt"
                                            width={400}
                                            height={400}

                                        />
                                        <span className='font-custom'>
                                            Twisted Dreams
                                        </span>
                                    </Link>
                                </Popup>
                            </Marker>
                        </>
                    )}
            </Map>

            <div className="text-white mx-auto container flex flex-col justify-center">
                {/* make a div that contains the address  */}
                <div className="flex flex-col justify-center items-center py-6">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-6xl text-textlogo font-bold font-custom2 text-center leading-normal">
                            <span className="text-">
                                Twisted Dreams
                                <br />
                                Haunt House
                            </span>
                            <br />
                            is hosted at
                            <br />
                            5815 panama drive
                            <br />
                            Buena Park, CA 90621  
                        </p>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default LocationLayout;
