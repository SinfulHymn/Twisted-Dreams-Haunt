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
      <Banner title={"Gallery"} />
      <div className="text-white mx-auto container flex flex-col justify-center flex-grow">
        {/* make a div that is an about us section */}
        
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
