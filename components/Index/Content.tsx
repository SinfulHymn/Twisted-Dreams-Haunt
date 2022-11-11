import Calendar from 'react-calendar'
import { useCallback, useEffect, useState } from 'react';
import ReactPlayer from './Test2';
import Map from './Test';
import styles from '@components/Index/Map.module.css';
import Link from 'next/link';
import Image from 'next/image';


const center = [33.8529527, -118.0314395]
const zoom = 12

function DisplayPosition({ map }) {
  const [position, setPosition] = useState(() => map.getCenter())

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
      <button onClick={onClick}>reset</button>
    </p>
  )
}


const Content = () => {
  const [value, setValue] = useState(new Date(2022, 9, 21));
  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <>

      <div className="container mx-auto p-6 ">
        <div className='flex flex-col justify-center items-center '>
          <div className=' my-6 w-full flex justify-center'>
            <ReactPlayer />
          </div>

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
      {/* TODO: 
  add external state to recenter map
*/}

      <Map
        className={styles.homeMap}
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        {
          ({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />


              <Marker position={center}>
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




