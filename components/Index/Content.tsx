import Calendar from 'react-calendar'
import { useState } from 'react';
// import 'react-calendar/dist/Calendar.css'
const datesToAddClassTo = [];

function tileClassName({ date, view }) {
    // Add class to tiles in month view only
    if (view === 'month') {
        // Check if a date React-Calendar wants to check is on the list of dates to add class to
        if (datesToAddClassTo.find(dDate => isSameDay(dDate, date))) {
            return 'myClassName';
        }
    }
}

const Content = () => {
    const [value, setValue] = useState(new Date(2022, 9, 21));
    function onChange(nextValue) {
        setValue(nextValue);
    }

    return (
        <div className="container mx-auto p-6 ">
            <div className='flex justify-center items-center '>

                <Calendar
                    className="bg-slate-900"
                    onChange={onChange}
                    value={value}
                    tileClassName={tileClassName}
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
                    tileDisabled={({ date, view }) => view === 'month' && date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4 || date.getDate() == 24 }
                    tileContent={({ date, view }) => view === 'month' && date.getDate()===21 || date.getDate()===22 || date.getDate() === 23 || date.getDate()===31 || (date.getDate()===30 && date.getMonth() === 9) || (date.getDate()===28 && date.getMonth() === 9) || (date.getDate()===29 && date.getMonth() === 9) ? <div className=" leading-none text-red-500 text-[10px] lg:text-s ">Twisted Dreams Haunt</div>: null}
                />
            </div>
 
        </div>
    );
}

export default Content;




