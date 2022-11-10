import Calendar from 'react-calendar'
import { useState } from 'react';
import Map from './Test';
import styles from '@components/Index/Map.module.css';
import Link from 'next/link';
import Image from 'next/image';

const datesToAddClassTo = [];
const DEFAULT_CENTER = [33.8529527, -118.0314395]


const Content = () => {
  const [value, setValue] = useState(new Date(2022, 9, 21));
  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <>

      <div className="container mx-auto p-6 ">
        <div className='flex justify-center items-center '>

          <Calendar
            className="bg-slate-900"
            onChange={onChange}
            value={value}
            calendarType="US"
            minDate={new Date(2022, 9, 21)}
            maxDate={new Date(2022, 10, 0)}
            minDetail="month"
            showNeighboringMonth={true}
            showNavigation={true}
            prevLabel={null}
            nextLabel={null}
            next2Label={null}
            prev2Label={null}
            tileDisabled={({ date, view }) => view === 'month' && date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4 || date.getDate() == 24}
            tileContent={({ date, view }) => view === 'month' && date.getDate() === 21 || date.getDate() === 22 || date.getDate() === 23 || date.getDate() === 31 || (date.getDate() === 30 && date.getMonth() === 9) || (date.getDate() === 28 && date.getMonth() === 9) || (date.getDate() === 29 && date.getMonth() === 9) ? <div className=" leading-none text-red-500 text-[10px] lg:text-s ">Twisted Dreams Haunt</div> : null}
          />
        </div>

      </div>

      <Map
        className={styles.homeMap}
        center={DEFAULT_CENTER}
        zoom={12}
        scrollWheelZoom={false}
      >
        {
          ({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />


              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  <Link
                    className='flex flex-col items-center '
                    href={"https://goo.gl/maps/Vye9xaDydMJKiuY36"}
                  >
                    <Image
                      className='max-h-[100px] w-auto object-center'
                      src="/images/tdh-web.png"
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
}

export default Content;




