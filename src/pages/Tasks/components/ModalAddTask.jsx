// Add Task Modal Component

import {useState} from 'react'
import {AiOutlineSchedule} from 'react-icons/ai'
import {MdOutlineLabel} from 'react-icons/md'

import { useTaskContext } from '../context'

import Label from './Label'
import DatePickerButton from './DatePickerButton'
import Flag from './Flag'

export default function ModalAddTask({showModal}) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [label, setLabel] = useState([])
    const [flagged,setFlagged] = useState(false)

    const {tasks, setTasks} = useTaskContext()
    
    const onDateChange = (d)=>{
        setDate(d)
    }

    const onLabelSelect = (item, e)=>{
        if(e.target.checked === true){
            setLabel((prev)=>[...prev, item])
        }
        if(e.target.checked === false){
            let newLabels = label.filter((oldLabel)=>oldLabel.id !==item.id)
            setLabel(newLabels)
        }
    }

    const onAddTask = ()=>{
        const newTask = {
            id: Math.random(),
            title,
            description,
            date,
            label,
            flagged,
            status: false
        }
        setTasks((prev)=>[...prev, newTask])
        //reset
        setTitle('')
        setDescription('')
        setDate(new Date())
        setLabel([])
        setFlagged(false)

        // close modal
        showModal((prev)=>!prev)
    }
    
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
                            value = {title}
                            onChange = {(e)=>setTitle(e.target.value)}
                        />
                        <input type="text" 
                            placeholder="Description"
                            className='outline-none text-xs'
                            value = {description}
                            onChange = {(e)=>setDescription(e.target.value)}
                        />
                </section>

                <section className='flex justify-between items-center mb-2'>                    
                    <DatePickerButton date = {date} onDateChange= {onDateChange}/>
                    <div className='flex gap-3 items-center'>                        
                        <Label  label = {label} onLabelSelect = {onLabelSelect}/>
                        <span onClick={()=>setFlagged((prev)=>!prev)}>
                            <Flag flagged= {flagged}/>
                        </span>
                    </div>

                </section>
            </div>

            <div className='p-3 pt-5 border border-transparent border-t-1 border-t-gray-400'>
                <section className='flex gap-3'>
                    <span 
                    className='text-sm font-semibold p-1 border border-gray-400 rounded-sm hover:bg-green-200 cursor-pointer'
                    onClick={onAddTask}
                    >Add Todo</span>
                    <span className='text-sm font-semibold p-1 border border-gray-400 rounded-sm hover:bg-green-200 cursor-pointer'
                    onClick={()=>showModal((prev)=>!prev)}>Cancel</span>           
                </section>
            </div>
        </div>
    </div>
  )
}
