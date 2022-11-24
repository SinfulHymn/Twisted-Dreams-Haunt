import Map from "@components/Index/MapSSRfix";
import Image from "next/image";
import Link from "next/link";
import styles from "@components/Index/Map.module.css";
import Banner from "@components/global/Banner";
const center = [33.8529527, -118.0314395];
const zoom = 10;

const ContactLayout = () => {
  return (
    <>
      <Banner title={"Contact"} />

      <div className="text-white mx-auto container flex flex-col justify-center flex-grow">
        {/* make a div that contains the address 
        <div className="flex flex-col justify-center items-center py-6">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl sm:text-4xl text-textlogo font-bold font-custom2 text-center leading-normal">
              Email: 
              <br />
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
        </div> */}
        <div className="container mx-auto">
          <div className="grid grid-cols-12 ">
            <div className=" relative mb-12  col-span-9 flex flex-col">
              <div className=" mb-7 pb-3 border-b border-gray-800">
                Get in Touch with us
              </div>
              <div className="mb-12">
                <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                  Fill out all required fields to send a message. You have to
                  login to your wordpress account to post any comment. Please
                  don´t spam, thank you!
                </p>
              </div>
              <div>
                <form className="flex flex-col">
                  <div className="flex flex-col mb-4">
                    <label className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-200">
                      Name
                    </label>
                    <input
                      className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-main-red"
                      type="text"
                      placeholder="Your name"
                    />

                    <label className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-200">
                      Email
                    </label>
                    <input
                      className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-main-red"
                      type="email"
                      placeholder="Your email"
                    />

                    <label className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-200">
                      Subject
                    </label>
                    <input
                      className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-main-red"
                      type="text"
                      placeholder="Subject"
                    />

                    <label className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-200">
                      Message
                    </label>
                    <textarea
                      className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-main-red"
                      placeholder="Your message"
                    ></textarea>

                    <button className="mt-4 bg-main-red text-white rounded-lg px-3 py-2 text-sm focus:outline-none hover:bg-main-red-dark">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="border col-span-3">tsaddfa</div>
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
