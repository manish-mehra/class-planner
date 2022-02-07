// Add Task: embedded inside main container

import {useState, useCallback} from 'react'

import {AiOutlineSchedule} from 'react-icons/ai'
import {MdOutlineLabel} from 'react-icons/md'



import Label from './Label'
import DatePickerButton from './DatePickerButton'
import Flag from './Flag'

export default function AddTask({addTask, cancelTask}) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [label, setLabel] = useState([])
    const [flagged,setFlagged] = useState(false)
    
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
        addTask({
            id: Math.random(),
            title,
            description,
            date,
            label,
            flagged
        })
        setTitle('')
        setDescription('')
        setDate(new Date())
        setLabel([])
        setFlagged(false)

        // close add task
        cancelTask()
    }

    return(
      <div className='flex flex-col mt-3 border border-gray-900 p-3 rounded-md relative'>
          <section className='flex flex-col mb-5'>
                <input type="text"
                    placeholder="e.g., Finish english homework"
                    className='outline-none mb-2 text-sm font-semibold'
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

          <section className='flex justify-between mt-3 items-center'>
                        <DatePickerButton date = {date} onDateChange= {onDateChange}/>

                    <div className='flex gap-3 items-center'>
                            <Label  label = {label} onLabelSelect = {onLabelSelect}/>
                            <span onClick={()=>setFlagged((prev)=>!prev)}>
                                <Flag flagged= {flagged}/>
                            </span>
                    </div>
          </section>

          <section className='flex gap-3 mt-4 absolute -bottom-16 -left-0.5'>
            <span 
            className='text-sm font-semibold p-1 border border-gray-400 rounded-sm hover:bg-green-200 cursor-pointer'
            onClick={onAddTask}
            >Add Todo</span>
            <span className='text-sm font-semibold p-1 border border-gray-400 rounded-sm hover:bg-green-200 cursor-pointer'
            onClick={cancelTask}
                >Cancel</span>
        </section>

      </div>
  )
}
