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
        <div className="flex h-full flex-col items-center justify-center border border-pink-400 p-1">
          <h1 className=" font-custom2 text-lg font-extrabold text-[#BABABA] sm:text-2xl md:text-3xl">
            Buena Park's Favorite Halloween Tradition.
          </h1>
          <h2 className=" font-custom2 text-base font-bold text-[#EA6112] sm:text-xl md:text-2xl">
            Halloween lives here!
          </h2>
        </div>
      </div>
      <div className="mx-auto flex-grow p-2 sm:p-5">
        <div className="flex w-full border border-green-400 py-4">
          <div className="mx-auto flex flex-col items-center justify-center border border-red-400 md:flex-row lg:w-9/12 lg:max-w-[892px] xl:w-8/12 xl:max-w-[1140px]">
            <div className="relative w-full border border-violet-300 md:w-1/2">
              <div className="relative pt-[56.25%]">
                <ReactPlayer
                  width={"100%"}
                  height={"100%"}
                  className="absolute top-0 left-0"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center border border-purple-500 px-4 text-[#BABABA] md:w-1/2">
              <h3 className="mb-4 font-custom2 text-xl font-bold lg:text-2xl">
                about twisted dreams haunt
              </h3>
              <h4 className="px-6 text-left leading-relaxed">
                Experience Twisted Dreams Haunt, Buena park's Favorite Halloween
                Tradition. Halloween lives here!
              </h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-x-6 border sm:space-y-6 xl:flex-row">
          {/* <div className="flex justify-center border xl:w-3/5">
            <ReactPlayer width={900} height={440} className="" />
          </div> */}
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
            {/* <div className='bg-[#441311] h-28 right-80 left-80 absolute opacity-90  -rotate-12 text-center content-center center'>
              <span className='h-10 top-0 bottom text-white text-4xl font-custom'>Come back next year</span>
            </div> */}
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
