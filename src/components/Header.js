import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBed , faPlane , faCar , faCalendar, faPerson} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Header() {



    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);


  return (
    
    <div className='relative bg-blue-900 text-white flex justify-center'>
        <div className='w-full max-w-screen-lg mt-5 mb-24 mx-0'>        
            <div className='flex gap-10 mb-14'>
            <div className='flex items-center gap-2 active:border-solid border-2 border-white p-2 rounded-[20px]'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
            </div>
            <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
        </div>
        <h1 className='text-3xl font-extrabold  tracking-wide '>A lifetime of discount ? It's Genius .</h1>
        <p className='my-5'>
            Get reawarded for your travels - unlock instant saving of 10% or more with a free Booking account </p>
        <button className='bg-blue-700 text-white border-none p-3 cursor-pointer text-xs'>
            Sign in / Register
        </button>
        <div className='absolute w-full max-w-screen-lg bg-white h-[30px] flex items-center border-solid border-[3px] border-orange-400  rounded-md px-0 py-7 justify-around bottom-[-30px]'>
            <div className='flex items-center gap-3'>
            <FontAwesomeIcon icon={faBed}  className="text-gray-400"/>
            <input className='border-none outline-none text-gray-800'placeholder='Where are you going ?'/>
            </div>
            <div className='flex items-center gap-3 cursor-pointer'>
            <FontAwesomeIcon icon={faCalendar}  className="text-gray-400"/>
            <span className='text-gray-400 '>date to date</span>
            <DateRange
                            className='absolute top-14 '
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                />
            </div>
            <div className='flex items-center gap-3'>
            <FontAwesomeIcon icon={faPerson}  className="text-gray-400"/>
            <span className='text-gray-400 '>2 adults 2 children 1 room</span>
            </div>
            <div className='flex items-center gap-3'>
                <button className='bg-blue-700 text-white border-none p-3 cursor-pointer text-xs'>
                    Search
                </button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Header