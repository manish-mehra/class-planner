import {useEffect, useState} from 'react'

import {format, isToday} from 'date-fns'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

import {AiOutlineSchedule} from 'react-icons/ai'

export default function Schedule() {

    const [startDate, setStartDate] = useState(new Date())
    const [isOpen, setIsOpen] = useState(false)
    

    const handleClick = (e)=>{
        e.preventDefault()
        setIsOpen(!isOpen)
    }
    const handleChange = (e) => {
        setIsOpen(!isOpen)
        setStartDate(e)
        
    }

  return (
    <>
        <div 
        className='hover:bg-green-200 p-1 rounded-md border border-gray-300 cursor-pointer'
        onClick={handleClick}
        >
        <span className='flex items-center gap-1'>
            <AiOutlineSchedule/>
            <p 
            className='text-xs font-semibold'
            >{isToday(startDate)? 'Today': format(startDate, "dd-MM-yyyy")}</p>
        </span>
    </div>
    {isOpen && (
        <DatePicker selected={startDate} onChange={handleChange} inline />
    )} 
    </>
  )
    
}
