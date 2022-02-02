import {useState} from 'react'
import {GrAdd} from 'react-icons/gr'

import TaskCard from './TaskCard'
import EditTodo from './EditTodo'

export default function Main() {
    
    const [addTodo, setAddTodo] = useState(false)
    const [tasks, setTasks] = useState([1, 2])

  return (
    <div className='mt-10 flex-col'>
        <ul>
            {
                tasks.map((task)=>
                    <li>
                        <TaskCard/>
                    </li>
                )
            }

            {
                addTodo? (
                    <>
                        <EditTodo/>
                        <div className='flex gap-3 mt-4'>
                            <span className='text-sm font-semibold p-1 border border-gray-400 rounded-sm hover:bg-green-200 cursor-pointer'>Add Todo</span>
                            <span className='text-sm font-semibold p-1 border border-gray-400 rounded-sm hover:bg-green-200 cursor-pointer'
                            onClick={()=>setAddTodo((prev)=>!prev)}>Cancel</span>
                        </div>
                    </>
                    
                ):
                (
                    <li
                    onClick={()=>setAddTodo((prev)=> !prev)}
                    className='flex items-center gap-1 group cursor-pointer mt-3'>
                    <p className='rounded-xl p-1 group-hover:bg-green-400'><GrAdd/></p>
                    <p className='group-hover:text-green-700'>Add Task</p>
                </li>
                )

            }
        </ul>
    </div>
  )
}
