import Map from "@components/Index/MapSSRfix"
import Image from "next/image";
import Link from "next/link";
import styles from "@components/Index/Map.module.css";
import Banner from "@components/global/Banner";
const center = [33.8529527, -118.0314395];
const zoom = 15;

const AboutLayout = () => {
    return (
        <>
            
            <Banner title={"About"} />
       
            
           
            

            <div className="text-white mx-auto container flex flex-col justify-center flex-grow">
                {/* make a div that is an about us section */}
                <div className="flex flex-col justify-center items-center py-6">
                    <h1 className="text-4xl sm:text-6xl text-textlogo font-custom2 font-bold text-center ">
                        About Us
                    </h1>
                    <p className="text-center text-xl sm:text-2xl font-custom2 text-textlogo">
                        Twisted Dreams Haunt is a haunted house located in the city of Buena Park, California. We are an organization that is dedicated to providing a fun, frightful, and safe environment for our guests. We are a group of friends who have been working together for over 20 years to bring you the best haunted house experience in Orange County California.
                    </p>
                </div>

            </div>


            <Map
                className={styles.homeMap}
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
                                            className='max-h-[6rem] w-auto object-center'
                                            src="/images/tdh-small-web.png"
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
        </>
    );
};

export default AboutLayout;
