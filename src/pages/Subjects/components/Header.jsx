import {useState} from 'react'

import { GrAdd } from 'react-icons/gr'

import AddSubject from './AddSubject'

export default function Header() {
    const [addSubject, setAddSubject] = useState(false)
  return (
    <div className='flex-col mt-14'>
        {/* add subject component */}
        {/* Add task component */}
        {
            addSubject? 
                <div>
                    <AddSubject showModal = {setAddSubject} isModal = {addSubject}/>
                </div>
            : null
        }
         <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold text-gray-700'>Subjects</h1>
            <p 
            className='mr-6 p-1 hover:bg-green-200 rounded-sm'
            onClick={()=>setAddSubject((prev)=> !prev)}>
                <GrAdd/>
            </p> 

        </div>
    </div>
  )
  }
