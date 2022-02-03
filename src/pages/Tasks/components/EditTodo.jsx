import {AiOutlineSchedule} from 'react-icons/ai'
import {MdOutlineLabel} from 'react-icons/md'
import {BsFlag} from 'react-icons/bs'

export default function EditTodo() {
    
    return(
      <div className='flex flex-col mt-3 border border-gray-900 p-3 rounded-md'>
          <section className='flex flex-col mb-5'>
                <input type="text"
                    placeholder="e.g., Finish english homework"
                    className='outline-none mb-1 text-sm font-semibold'
                />
                <input type="text" 
                    placeholder="Description"
                    className='outline-none text-xs'
                />
          </section>

          <section className='flex justify-between mt-3 items-center'>
                <div className='hover:bg-green-200 p-1 rounded-md border border-gray-300 cursor-pointer'>
                    <span className='flex items-center gap-1'>
                        <AiOutlineSchedule/>
                        <p className='text-xs font-semibold'>Schedule</p>
                    </span>
                </div>

                <div className='flex gap-2'>
                    <span className='hover:bg-green-200 p-1 rounded-sm cursor-pointer'>
                        <MdOutlineLabel/>
                    </span>
                    <span className='p-1 hover:bg-green-200 rounded-sm cursor-pointer'>
                        <BsFlag/>
                    </span>
                </div>
          </section>
      </div>
  )
}