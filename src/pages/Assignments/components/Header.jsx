import {useState} from 'react'

import { GrAdd } from 'react-icons/gr'

import AddAssignment from './AddAssignment'

export default function Header() {

    const [addAssignment, setAssignment] = useState(false)
    
    return (
    <div className='flex-col mt-14'>
        {/* add subject component */}
        {/* Add task component */}
        {

            <AddAssignment showModal = {setAssignment} isModal = {addAssignment}/>
        }
         <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold text-gray-700'>Assignments</h1>
            <p 
            className='mr-6 p-1 hover:bg-green-200 rounded-sm'
            onClick={()=>setAssignment((prev)=> !prev)}>
                <GrAdd/>
            </p> 

        </div>
    </div>
  )
  }
