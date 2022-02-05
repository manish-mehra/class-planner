// Add Task Modal Component

import {useState} from 'react'
import {AiOutlineSchedule} from 'react-icons/ai'
import {MdOutlineLabel} from 'react-icons/md'
import {BsFlag} from 'react-icons/bs'


import Label from './Label'

export default function ModalAddTask({showModal}) {

    const [showLabel, setShowLabel] = useState(false)

  return (
      <div 
      className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
    
      >
        <div 
        className='w-1/3 flex flex-col justify-between bg-white border border-gray-200 rounded-md shadow-2xl relative">'
        >
    {/* top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 */}
            <div className='flex-col justify-between p-3'>
                <section className='flex flex-col mb-14'>
                        <input type="text"
                            placeholder="e.g., Finish english homework"
                            className='outline-none mb-3 text-sm font-semibold'
                        />
                        <input type="text" 
                            placeholder="Description"
                            className='outline-none text-xs'
                        />
                </section>

                <section className='flex justify-between items-center mb-2'>
                        <div>
                            <span className='flex items-center gap-1 hover:bg-green-200 p-1 rounded-md border border-gray-300 cursor-pointer'>
                                <AiOutlineSchedule/>
                                <p className='text-xs font-semibold'>Schedule</p>                                
                            </span>
                        </div>

                        <div className='flex gap-3 items-center'>
                            
                            <Label/>
                            <BsFlag/>
        
                        </div>
                </section>
            </div>

            <div className='p-3 pt-5 border border-transparent border-t-1 border-t-gray-400'>
                <section className='flex gap-3'>
                    <span className='text-sm font-semibold p-1 border border-gray-400 rounded-sm hover:bg-green-200 cursor-pointer'>Add Todo</span>
                    <span className='text-sm font-semibold p-1 border border-gray-400 rounded-sm hover:bg-green-200 cursor-pointer'
                    onClick={()=>showModal((prev)=>!prev)}>Cancel</span>           
                </section>
            </div>
        </div>
    </div>
  )
}
