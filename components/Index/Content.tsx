import Calendar from "react-calendar";
import { useCallback, useEffect, useState } from "react";
import ReactPlayer from "./PlayerSSRfix";
import Map from "./MapSSRfix";
import styles from "@components/Index/Map.module.css";
import Link from "next/link";
import Image from "next/image";

const center = [33.8529527, -118.0314395];
const zoom = 10;

function DisplayPosition({ map }) {
  const [position, setPosition] = useState(() => map.getCenter());

  const onClick = useCallback(() => {
    map.setView(center, zoom);
  }, [map]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{" "}
      <button onClick={onClick}>reset</button>
    </p>
  );
}

const Content = () => {
  const [value, setValue] = useState(new Date(2022, 9, 21));
  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <>
      <div className=" w-full bg-zinc-900">
        <div className="flex h-full flex-col items-center justify-center  p-1.5 text-center">
          <h1 className=" font-custom2 text-xl font-extrabold text-[#BABABA] sm:text-2xl md:text-3xl">
            Buena Park's Favorite Halloween Tradition.
          </h1>
          <h2 className=" font-custom2 text-base font-bold text-[#EA6112] sm:text-xl md:text-2xl">
            Halloween lives here!
          </h2>
        </div>
      </div>
      <div className="py-4">
        <div className="mx-auto flex flex-col items-center justify-center md:flex-row lg:w-9/12 lg:max-w-[892px] xl:w-8/12 xl:max-w-[1140px]">
          <div className="relative w-full  md:w-1/2">
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                width={"100%"}
                height={"100%"}
                className="absolute top-0 left-0"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center p-4 text-[#BABABA] md:w-1/2">
            <h3 className="mb-4 text-center font-custom2 text-xl font-bold lg:text-2xl">
              about twisted dreams haunt
            </h3>
            <h4 className="px-6 text-left leading-normal sm:px-2">
              Experience Twisted Dreams Haunt, Buena park's Favorite Halloween
              Tradition. Halloween lives here!
            </h4>
          </div>
        </div>
      </div>

      <div className=" w-full bg-zinc-900">
        <div className="flex h-full flex-col items-center justify-center  p-1.5 text-center">
          <h1 className=" font-custom2 text-xl font-extrabold text-main-orange sm:text-2xl md:text-3xl">
            2023 Halloween Haunt!
          </h1>
          <h2 className=" font-custom2 text-base font-bold text-[#BABABA] sm:text-xl md:text-2xl">
            coming soon!
          </h2>
        </div>
      </div>

      <div className="">
        <div className="flex min-h-[400px]">
          <div className="relative order-2 w-[100%] md:w-[60%]">
            <Image
              src={"/images/tdh-index-2.jpg"}
              alt="Twisted Dreams Haunt"
              className="object-cover object-[50%_0%] md:object-[20%_20%]"
              fill
            />
            <div className="absolute bottom-0 left-0 w-full overflow-hidden  md:hidden">
              <div className="">
                <div className="flex w-full items-center justify-center text-center font-custom2 text-3xl font-extrabold text-main-orange">
                  Title 1
                </div>
                <div className="flex h-full flex-col items-center justify-center bg-[#000000] bg-opacity-50 p-2 text-[#BABABA]">
                  <h4 className="truncate whitespace-normal px-6 text-left text-sm leading-normal  sm:px-2">
                    Twisted Dreams Haunt is Buena Park's favorite Halloween
                    tradition. We are a family owned and operated haunt that has
                    been scaring the community for over 10 years. We are located
                    in the heart of Buena Park, California.
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 hidden w-[0%] md:block md:w-[40%]">
            <div className="flex flex-col items-center justify-center p-4 text-[#BABABA]">
              <h3 className="mb-4 text-center font-custom2 text-xl font-bold text-main-orange lg:text-3xl">
                2023 Halloween Haunt
              </h3>
              <h4 className="px-6 text-left leading-normal sm:px-2">
                Twisted Dreams Haunt is Buena Park's favorite Halloween
                tradition. We are a family owned and operated haunt that has
                been scaring the community for over 10 years. We are located in
                the heart of Buena Park, California. We are a 501(c)(3)
                non-profit organization that donates all proceeds to local
                charities. We are a family friendly haunt that is fun for all
                ages. We are open every Friday and Saturday in October from 7pm
                to 11pm. We are located at 7000 Beach Blvd. Buena Park, CA
                90620. We are located in the parking lot of the Buena Park
                Community Center. We are a 501(c)(3) non-profit organization
                that donates all proceeds to local charities. We are a family
                friendly haunt that is fun for all ages. We are open every
                Friday and Saturday in October from 7pm to 11pm. We are located
                at 7000 Beach Blvd. Buena Park, CA 90620. We are located in the
                parking lot of the Buena Park Community Center.
              </h4>
            </div>
          </div>
        </div>

        <div className="flex min-h-[400px]">
          <div className="relative w-[100%] md:w-[60%]">
            <Image
              src={"/images/tdh-index-1.jpg"}
              alt="Twisted Dreams Haunt"
              className="object-cover object-[50%_0%] md:object-[20%_20%]"
              fill
            />
            <div className="absolute bottom-0 left-0 w-full overflow-hidden  md:hidden">
              <div className="">
                <div className="flex w-full items-center justify-center text-center font-custom2 text-3xl font-extrabold text-main-orange">
                  Title 2
                </div>
                <div className="flex h-full flex-col items-center justify-center bg-[#000000] bg-opacity-50 p-2 text-[#BABABA]">
                  <h4 className="truncate whitespace-normal px-6 text-left text-sm leading-normal  sm:px-2">
                    Twisted Dreams Haunt is Buena Park's favorite Halloween
                    tradition. We are a family owned and operated haunt that has
                    been scaring the community for over 10 years. We are located
                    in the heart of Buena Park, California.
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-[40%] md:block">
            <div className="flex flex-col items-center justify-center p-4 text-[#BABABA]">
              <h3 className="mb-4 text-center font-custom2 text-xl font-bold text-main-orange lg:text-3xl">
                2023 Halloween Haunt
              </h3>
              <h4 className="px-6 text-left leading-normal sm:px-2">
                Twisted Dreams Haunt is Buena Park's favorite Halloween
                tradition. We are a family owned and operated haunt that has
                been scaring the community for over 10 years. We are located in
                the heart of Buena Park, California. We are a 501(c)(3)
                non-profit organization that donates all proceeds to local
                charities. We are a family friendly haunt that is fun for all
                ages. We are open every Friday and Saturday in October from 7pm
                to 11pm. We are located at 7000 Beach Blvd. Buena Park, CA
                90620. We are located in the parking lot of the Buena Park
                Community Center. We are a 501(c)(3) non-profit organization
                that donates all proceeds to local charities. We are a family
                friendly haunt that is fun for all ages. We are open every
                Friday and Saturday in October from 7pm to 11pm. We are located
                at 7000 Beach Blvd. Buena Park, CA 90620. We are located in the
                parking lot of the Buena Park Community Center.
              </h4>
            </div>
          </div>
        </div>
        <div className="flex min-h-[400px]">
          <div className="relative order-2 w-[100%] md:w-[60%]">
            <Image
              src={"/images/tdh-index-2variant.jpg"}
              alt="Twisted Dreams Haunt"
              className="object-cover object-[50%_0%] md:object-[20%_20%]"
              fill
            />
            <div className="absolute bottom-0 left-0 w-full overflow-hidden  md:hidden">
              <div className="">
                <div className="flex w-full items-center justify-center text-center font-custom2 text-3xl font-extrabold text-main-orange">
                  Title 3
                </div>
                <div className="flex h-full flex-col items-center justify-center bg-[#000000] bg-opacity-50 p-2 text-[#BABABA]">
                  <h4 className="truncate whitespace-normal px-6 text-left text-sm leading-normal  sm:px-2">
                    Twisted Dreams Haunt is Buena Park's favorite Halloween
                    tradition. We are a family owned and operated haunt that has
                    been scaring the community for over 10 years. We are located
                    in the heart of Buena Park, California.
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 hidden w-[40%] md:block">
            <div className="flex flex-col items-center justify-center p-4 text-[#BABABA]">
              <h3 className="mb-4 text-center font-custom2 text-xl font-bold text-main-orange lg:text-3xl">
                2023 Halloween Haunt
              </h3>
              <h4 className="px-6 text-left leading-normal sm:px-2">
                Twisted Dreams Haunt is Buena Park's favorite Halloween
                tradition. We are a family owned and operated haunt that has
                been scaring the community for over 10 years. We are located in
                the heart of Buena Park, California. We are a 501(c)(3)
                non-profit organization that donates all proceeds to local
                charities. We are a family friendly haunt that is fun for all
                ages. We are open every Friday and Saturday in October from 7pm
                to 11pm. We are located at 7000 Beach Blvd. Buena Park, CA
                90620. We are located in the parking lot of the Buena Park
                Community Center. We are a 501(c)(3) non-profit organization
                that donates all proceeds to local charities. We are a family
                friendly haunt that is fun for all ages. We are open every
                Friday and Saturday in October from 7pm to 11pm. We are located
                at 7000 Beach Blvd. Buena Park, CA 90620. We are located in the
                parking lot of the Buena Park Community Center.
              </h4>
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
                    className="max-h-[100px] w-auto object-center"
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

export default Content;

{
  /* <div className="flex flex-col items-center justify-center space-x-6 border sm:space-y-6 xl:flex-row">
          
          <div className=" flex h-full items-center justify-center ">
            <Calendar
              className="flex flex-col items-center justify-center"
              onChange={onChange}
              value={value}
              calendarType="US"
              minDate={new Date(2023, 9, 21)}
              maxDate={new Date(2023, 10, 0)}
              minDetail="month"
              showNeighboringMonth={true}
              showNavigation={true}
              prevLabel={null}
              nextLabel={null}
              next2Label={null}
              prev2Label={null}
              tileClassName="relative"
              tileDisabled={({ date, view }) =>
                (view === "month" && date.getDay() === 2) ||
                date.getDay() === 3 ||
                date.getDay() === 4 ||
                date.getDate() == 24
              }
              tileContent={({ date, view }) =>
                (view === "month" && date.getDate() === 21) ||
                date.getDate() === 22 ||
                date.getDate() === 23 ||
                date.getDate() === 31 ||
                (date.getDate() === 30 && date.getMonth() === 9) ||
                (date.getDate() === 28 && date.getMonth() === 9) ||
                (date.getDate() === 29 && date.getMonth() === 9) ? (
                  <div className=" text-[10px] leading-none text-red-500 lg:text-[12px] ">
                    Twisted Dreams Haunt
                  </div>
                ) : null
              }
            />
            <div className='bg-[#441311] h-28 right-80 left-80 absolute opacity-90  -rotate-12 text-center content-center center'>
              <span className='h-10 top-0 bottom text-white text-4xl font-custom'>Come back next year</span>
            </div> 
          </div>
        </div> */
}
