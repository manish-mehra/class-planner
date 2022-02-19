import {useState} from 'react'
import TimetableMenu from './TimetableMenu'

import {MdOutlineChangeCircle} from 'react-icons/md'
import {BsThreeDotsVertical} from 'react-icons/bs'

import SwitchTimetable from './SwitchTimetable'

export default function () {

  const [switchTimetableModal, setSwitchTimetableModal] = useState(false)

  return (
    <div className='flex-col mt-14'>

      {switchTimetableModal? <SwitchTimetable isModal={switchTimetableModal} setModal = {setSwitchTimetableModal}/> : null}

      <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold text-gray-700'>Timetable</h1> 
            <span className='flex gap-1'>
            <p 
            className='p-1 hover:bg-green-200 rounded-sm'>
                <MdOutlineChangeCircle className='text-lg' onClick={()=> setSwitchTimetableModal((prev)=>!prev)}/>
            </p>

            <TimetableMenu/>

            </span>
            

        </div>
    </div>
  )
}
