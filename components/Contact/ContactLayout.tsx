import Image from "next/image";
import Link from "next/link";

import Map from "@components/Index/MapSSRfix";
import styles from "@components/Index/Map.module.css";
import Banner from "@components/global/Banner";
import EmailComponent from "@components/Contact/EmailComponent";

const center = [33.8529527, -118.0314395];
const zoom = 10;

const ContactLayout = () => {
  return (
    <>
      <Banner title={"Contact"} />

      <div className="py-5 px-4 font-custom2 text-main-orange lg:py-10 lg:px-2">
        <div className="container mx-auto grid grid-cols-12 gap-5">
          <div className="col-span-12 space-y-6 lg:col-span-9">
            <div className="text-2xl font-extrabold">
              Leave a Message
              <hr className="my-4 h-px border-0 bg-main-orange"></hr>
            </div>

            <div>
              <p className=" text-xl font-extrabold">Get in touch with us!</p>
            </div>

            <div>
              <EmailComponent />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="text-2xl font-extrabold">Company Info</div>

            <hr className="my-4 h-px border-0 bg-main-orange "></hr>

            <div className="flex w-full flex-col whitespace-pre-line border border-main-orange py-4 px-2 text-sm lg:flex-wrap">
              <p className="mb-6 w-full whitespace-pre-line font-bold">
                If you are in the middle of something and you don’t want to miss
                that important call.
              </p>
              <div className="space-y-6 font-bold">
                <p className="flex lg:flex-col">
                  Email:{" "}
                  <a className="ml-4 text-main-red ">
                    contact@twisteddreamshaunt.com
                  </a>
                </p>
                <p className="flex lg:flex-col">
                  Phone:{" "}
                  <a className="ml-4 text-main-red">+1 (818) 645 - 7172</a>
                </p>
                <p className="flex lg:flex-col">
                  Fax:{" "}
                  <a className="ml-4 text-main-red">support@bigguyauto.com</a>
                </p>
                <p className="flex lg:flex-col">
                  Email:{" "}
                  <a className="ml-4 text-main-red">support@bigguyauto.com</a>
                </p>
              </div>
            </div>
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

export default ContactLayout;
