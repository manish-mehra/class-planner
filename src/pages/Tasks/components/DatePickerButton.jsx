import {forwardRef} from 'react'

import {isToday} from 'date-fns'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

import {AiOutlineSchedule} from 'react-icons/ai'

export default function DatePickerButton({date, onDateChange}) {


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
            selected={date}
            onChange={(d) => onDateChange(d)}
            customInput={<ExampleCustomInput />}
            calendarClassName = "custom-react-datepicker"
        
        />
    </div>
  )
    
}

