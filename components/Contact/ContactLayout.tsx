import Map from "@components/Index/MapSSRfix";
import Image from "next/image";
import Link from "next/link";
import styles from "@components/Index/Map.module.css";
import Banner from "@components/global/Banner";
const center = [33.8529527, -118.0314395];
const zoom = 15;

const ContactLayout = () => {
  return (
    <>
      <Banner title={"Contact"} />

      <div className="text-white mx-auto container flex flex-col justify-center flex-grow">
        {/* make a div that contains the address  */}
        <div className="flex flex-col justify-center items-center py-6">
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl sm:text-6xl text-textlogo font-bold font-custom2 text-center leading-normal">
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

      
        <Map
          className={styles.homeMap}
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
        >
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />

              <Marker position={center}>
                <Popup>
                  <Link
                    className="flex flex-col items-center "
                    href={"https://goo.gl/maps/Vye9xaDydMJKiuY36"}
                  >
                    <Image
                      className="max-h-[6rem] w-auto object-center"
                      src="/images/tdh-small-web.png"
                      alt="Twisted Dreams Haunt"
                      width={400}
                      height={400}
                    />
                    <span className="font-custom">Twisted Dreams</span>
                  </Link>
                </Popup>
              </Marker>
            </>
          )}
        </Map>
      

    </>
  );
};

export default ContactLayout;
