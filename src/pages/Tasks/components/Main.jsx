import {useState} from 'react'
import {GrAdd} from 'react-icons/gr'

import TaskCard from './TaskCard'
import AddTask from './AddTask'



export default function Main() {
    
    const [addTodo, setAddTodo] = useState(false)
    const [tasks, setTasks] = useState([])

    const addTaskHandler = (task)=>{
        setTasks((prev)=>[...prev, task])
    }

    const taskStatusHandler = (task, event)=>{

        if(event.target.checked === true){
            const filteredTasks = tasks.filter((todo)=> todo.id !== task.id)
            const newTask = {...task, status: true}
            filteredTasks.push(newTask)
            setTasks(()=>
             filteredTasks.filter((task)=>task.status !== true)
            )
        }else{
            console.log("something went wrong")
        }
        

    }
  return (
    <div className='mt-10 flex-col h-4/5'>
        <ul>
            {
                tasks?.map((task)=>
                    <li key={task.id}>
                        <TaskCard task = {task} taskStatusHandler = {taskStatusHandler}/>
                    </li>
                )
            }

            {
                addTodo? (
                    <>
                        <AddTask addTask = {addTaskHandler} cancelTask = {()=>setAddTodo((prev)=>!prev)}/>
                        {/* <section className='flex gap-3 mt-4'>
                            <span className='text-sm font-semibold p-1 border border-gray-400 rounded-sm hover:bg-green-200 cursor-pointer'>Add Todo</span>
                            <span className='text-sm font-semibold p-1 border border-gray-400 rounded-sm hover:bg-green-200 cursor-pointer'
                                onClick={()=>setAddTodo((prev)=>!prev)}>Cancel</span>
                        </section> */}
                    </>
                    
                ):
                (
                    <li
                    onClick={()=>setAddTodo((prev)=> !prev)}
                    className='flex items-center gap-1 group cursor-pointer mt-3'>
                    <p className='rounded-xl p-1 group-hover:bg-green-300'><GrAdd/></p>
                    <p className='group-hover:text-green-700'>Add Task</p>
                </li>
                )

            }
        </ul>
    </div>
  )
}
