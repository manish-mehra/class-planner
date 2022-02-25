import {useState} from 'react'

import { GrAdd } from 'react-icons/gr'

import AddExam from './AddExam'

export default function Header() {

    const [addExam, setAddExam] = useState(false)
    
    return (
    <div className='flex-col mt-14'>
        {/* add subject component */}
        {/* Add task component */}
        {

            <AddExam showModal = {setAddExam} isModal = {addExam}/>
        }
         <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold text-gray-700'>Exams</h1>
            <p 
            className='mr-6 p-1 hover:bg-green-200 rounded-sm'
            onClick={()=>setAddExam((prev)=> !prev)}>
                <GrAdd/>
            </p> 

        </div>
    </div>
  )
  }
