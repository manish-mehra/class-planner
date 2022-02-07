// Add Task: embedded inside main container

import {useState} from 'react'

import {AiOutlineSchedule} from 'react-icons/ai'
import {MdOutlineLabel} from 'react-icons/md'


import Label from './Label'
import DatePickerButton from './DatePickerButton'
import Flag from './Flag'

export default function AddTask() {

    const [flagged,setFlagged] = useState(false)
    

    return(
      <div className='flex flex-col mt-3 border border-gray-900 p-3 rounded-md'>
          <section className='flex flex-col mb-5'>
                <input type="text"
                    placeholder="e.g., Finish english homework"
                    className='outline-none mb-2 text-sm font-semibold'
                />
                <input type="text" 
                    placeholder="Description"
                    className='outline-none text-xs'
                />
          </section>

          <section className='flex justify-between mt-3 items-center'>
                        <DatePickerButton/>
                    <div className='flex gap-3 items-center'>
                            <Label/>
                            <span onClick={()=>setFlagged((prev)=>!prev)}>
                                <Flag flagged= {flagged}/>
                            </span>
                    </div>
          </section>

      </div>
  )
}
