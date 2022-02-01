import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BsFlag} from 'react-icons/bs'

export default function TaskCard() {
  return(
    <div className='flex justify-between pb-4 border border-transparent border-b-gray-300'>
        
        <div className='flex-col'>

            <div className='flex items-center'>
                <input type="checkbox" name = "todo"/>
                <h1 className='text-base text-gray-700 ml-2'>This is the title of a todo list</h1>
            </div>
            <div>
                <p className='text-sm text-green-800'>24-8-2022</p>
                <p className='text-gray-600'>this is a description which is very long</p>
            </div>
        </div>

        <div className='flex gap-2'>
            <p>
                <BsFlag/>
            </p>
            <p>
                <BsThreeDotsVertical/>
            </p>
        </div>

    </div>
  )
}
