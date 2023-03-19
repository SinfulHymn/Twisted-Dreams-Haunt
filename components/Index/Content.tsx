import Calendar from "react-calendar";
import { useCallback, useEffect, useState } from "react";
import Map from "./MapSSRfix";
import styles from "@components/Index/Map.module.css";
import Link from "next/link";
import Image from "next/image";
import InfoBanner from "./InfoBanner";
import AboutSection from "./AboutSection";
import InfoSectionLeft from "./InfoSectionLeft";
import InfoSectionRight from "./InfoSectionRight";

const x = 33.8529527;
const y = -118.0314395;
const center = [x, y];
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

const Content = ({ contentData }) => {
  const infoBannerOneData = contentData.InfoBannerOne;
  const infoBannerTwoData = contentData.InfoBannerTwo;
  const aboutSectionData = contentData.AboutSection;
  const informationBlockOneData = contentData.InformationBlockOne;
  const informationBlockTwoData = contentData.InformationBlockTwo;
  const informationBlockThreeData = contentData.InformationBlockThree;

  const [value, setValue] = useState(new Date(2022, 9, 21));
  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <>
      <InfoBanner data={infoBannerOneData} />
      <AboutSection aboutData={aboutSectionData} />
      <InfoBanner data={infoBannerTwoData} />

      <div>
        <InfoSectionLeft data={informationBlockOneData} />
        <InfoSectionRight data={informationBlockTwoData} />
        <InfoSectionLeft data={informationBlockThreeData} />
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
