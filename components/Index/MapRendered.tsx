import Map from "@components/global/Map/MapSSRfix";
import styles from "@components/global/Map/Map.module.css";
import Link from "next/link";
import Image from "next/image";

const x = 33.8529527;
const y = -118.0314395;
const zoom = 10;
const center = [x, y];

const MapRendered = () => {
  return (
    <>
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
                    className="max-h-[6.25rem] w-auto object-center"
                    src="/images/tdh-small-web.png"
                    alt="Twisted Dreams Haunt"
                    width={400}
                    height={400}
                  />
                  <span className="text-center font-custom">
                    Directions to Event
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

export default MapRendered;
