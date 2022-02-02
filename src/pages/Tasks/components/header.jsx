import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {FiFilter} from 'react-icons/fi'
import {GrAdd} from 'react-icons/gr'

export default function Header() {
  return (
      <div className='flex-col mt-14'>
          {/* top section */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold text-gray-700'>Tasks</h1>
            
            <div className='flex items-center  justify-between'>
                
                <div className='mr-6 p-1 hover:bg-green-200 rounded-sm'>
                    <GrAdd/>
                </div>

                <span className='text-gray-600 flex items-center py-1'>
                   <div className='mx-3'>
                       <BsSearch className='text-lg'/>
                    </div>
                    <input 
                    type="text"
                    placeholder='Search'
                    className='form-input w-full outline-none border border-transparent focus-within:border-b-green-600'
                    />
                </span>
                <div className='ml-6'>
                <FiFilter className='text-lg'/>
                </div>
            </div>

        </div>

      </div>
  )
}
