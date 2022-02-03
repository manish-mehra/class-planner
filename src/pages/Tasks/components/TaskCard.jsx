import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BsFlag} from 'react-icons/bs'
import {AiOutlineSchedule} from 'react-icons/ai'
import {MdOutlineLabel} from 'react-icons/md'


export default function TaskCard() {
  return(
    <div className='flex flex-col mt-3 border border-gray-200 p-3 rounded-md shadow-sm'>
          <section className='flex flex-col mb-5'>
                <div className='flex justify-between'>
                    <span className='outline-none mb-1 text-sm font-semibold'>
                        Finish task management
                    </span>
                    <div className='flex gap-1'>
                        <BsFlag/>
                        <BsThreeDotsVertical/>
                    </div>
                </div>
                <span 
                    placeholder="Description"
                    className='outline-none text-xs'
                >
                    I should absolutely finish this
                </span>
          </section>

          <section className='flex justify-between mt-3 items-center'>
                <div className='hover:bg-green-200 p-1 rounded-md border border-gray-300 cursor-pointer'>
                    <span className='flex items-center'>
                        <p className='text-xs font-semibold'>Tomorrow</p>
                    </span>
                </div>

                <div className='flex gap-2'>
                    <span className='flex gap-1 text-xs'>
                        <p className='bg-green-200 p-1 rounded-sm cursor-pointer'>english</p>
                        <p className='bg-green-200 p-1 rounded-sm cursor-pointer'>math</p>
                    </span>
                </div>
          </section>
      </div>
  )
}
