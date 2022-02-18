import React from 'react'
import TimetableMenu from './TimetableMenu'

import {MdOutlineChangeCircle} from 'react-icons/md'
import {BsThreeDotsVertical} from 'react-icons/bs'


export default function () {
  return (
    <div className='flex-col mt-14'>
      <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold text-gray-700'>Timetable</h1>
            
            <span className='flex gap-1'>
            <p 
            className='p-1 hover:bg-green-200 rounded-sm'>
                <MdOutlineChangeCircle className='text-lg'/>
            </p>

            <TimetableMenu/>

            </span>
            

        </div>
    </div>
  )
}
