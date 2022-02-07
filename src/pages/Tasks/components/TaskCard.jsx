import React from 'react'
import {format, isToday} from 'date-fns'

import Flag from './Flag'

import {BsThreeDotsVertical} from 'react-icons/bs'
import {BsFlag} from 'react-icons/bs'
import {BsFillFlagFill} from 'react-icons/bs'
import {AiOutlineSchedule} from 'react-icons/ai'
import {MdOutlineLabel} from 'react-icons/md'


export default function TaskCard({task}) {
    const {title, description, date, label, flagged} = task
  return(
    <div className='flex flex-col mt-3 border border-gray-200 p-3 rounded-md shadow-sm'>
          <section className='flex flex-col mb-5'>
                <div className='flex justify-between'>
                    <span className='outline-none mb-1 flex items-center gap-1'>
                        <input type="checkbox"/>
                        <p className='text-sm font-semibold'>{title}</p>
                    </span>
                    <div className='flex gap-1'>
                    {flagged?
                        <BsFillFlagFill fill='green'/> : null}
                        <BsThreeDotsVertical/>
                    </div>
                </div>
                <span 
                    placeholder="Description"
                    className='outline-none text-xs'
                >
                    {description}
                </span>
          </section>

          <section className='flex justify-between mt-3 items-center'>
                <div className='hover:bg-green-200 p-1 rounded-md border border-gray-300 cursor-pointer'>
                    <span className='flex items-center'>
                        <p className='text-xs font-semibold'>{isToday(date)? 'Today': format(date, 'MM/dd/yyyy')}</p>
                    </span>
                </div>

                <div className='flex gap-2'>
                    <span className='flex gap-1 text-xs'>
                        {
                            label.map((item)=>
                            <p key = {item.name} 
                            className='bg-green-200 p-1 rounded-sm cursor-pointer'>{item.name}</p>
                            )
                        }
                        
                    </span>
                </div>
          </section>
      </div>
  )
}
