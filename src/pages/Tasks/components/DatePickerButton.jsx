import {useEffect, useState, forwardRef} from 'react'

import {format, isToday} from 'date-fns'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

import {AiOutlineSchedule} from 'react-icons/ai'

export default function DatePickerButton() {

    const [startsDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <div 
            className='hover:bg-green-200 p-1 rounded-md border border-gray-300 cursor-pointer relative'
            onClick={onClick} ref={ref}
            >
            <span className='flex items-center gap-1'>
                <AiOutlineSchedule/>
                <p 
                className='text-xs font-semibold'
                >{isToday(new Date(value))? 'Today': value}</p>
            </span>
        </div>

    ))
    
  return (
    <div>
        <DatePicker
            selected={startsDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
        />
    </div>
  )
    
}

