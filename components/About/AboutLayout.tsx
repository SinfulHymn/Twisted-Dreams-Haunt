import Map from "@components/Index/MapSSRfix";
import Image from "next/image";
import Link from "next/link";
import styles from "@components/Index/Map.module.css";
import Banner from "@components/global/Banner";
const center = [33.8529527, -118.0314395];
const zoom = 10;

const AboutLayout = () => {
  return (
    <>
      <Banner title={"About"} />

      <div className="container mx-auto flex flex-grow flex-col justify-center border-main-orange p-6 text-white">
        {/* make a div that is an about us section */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-10 md:grid-cols-2 ">
          <div className=" mx-auto w-full border-main-orange md:w-8/12">
            <Image
              src="/images/about1.jpg"
              alt="About Us"
              width={500}
              height={500}
              className=" h-full  w-full object-contain"
            />
          </div>
          <div className="prose lg:prose-xl flex-1 space-y-6 rounded-xl bg-galleryButton p-6">
            <h1 className=" just border-b border-b-main-orange font-custom2 text-4xl font-bold text-main-orange">
              About Us
            </h1>
            <p className="pro font-custom2 text-lg font-bold text-textlogo  sm:text-xl">
              Twisted Dreams Haunt is a haunted house located in the city of
              Buena Park, California. We are an organization that is dedicated
              to providing a fun, frightful, and safe environment for our
              guests. We are a group of friends who have been working together
              for over 20 years to bring you the best haunted house experience
              in Orange County California.
            </p>
            <p className=" font-custom2 text-lg font-bold text-textlogo sm:text-2xl">
              Twisted Dreams Haunt is a haunted house located in the city of
              Buena Park, California. We are an organization that is dedicated
              to providing a fun, frightful, and safe environment for our
              guests. We are a group of friends who have been working together
              for over 20 years to bring you the best haunted house experience
              in Orange County California.
            </p>
          </div>
        </div>
      </div>

      <Map
        className={styles.homeMap}
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url={`https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=${process.env.NEXT_PUBLIC_THUNDERMAP}`}
              // attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />

            <Marker position={center}>
              <Popup>
                <Link
                  className="flex flex-col items-center "
                  href={"https://goo.gl/maps/Vye9xaDydMJKiuY36"}
                >
                  <Image
                    className="max-h-[5rem] w-auto object-center"
                    src="/images/tdh-small-web.png"
                    alt="Twisted Dreams Haunt"
                    width={400}
                    height={400}
                  />
                  <span className="font-custom text-accent-orange">
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
