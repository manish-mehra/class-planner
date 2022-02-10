import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef, useEffect} from 'react'

import { useTaskContext } from '../context'

import {AiOutlineSchedule} from 'react-icons/ai'
import {MdOutlineLabel} from 'react-icons/md'

import Label from './Label'
import DatePickerButton from './DatePickerButton'
import Flag from './Flag'

export default function EditTask({showModal, isModal}) {


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
    <>
      <Transition appear show={isModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={()=>showModal(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div  className="inline-block w-full max-w-md my-8 overflow text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">

            <div className='flex-col justify-between'>
                <section className='flex flex-col mb-14 p-2'>
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

                <section className='flex justify-between items-center mb-2 p-2'>                    
                    <DatePickerButton date = {date} onDateChange= {onDateChange}/>
                    <div className='flex gap-3 items-center'>                        
                        <Label  label = {label} onLabelSelect = {onLabelSelect}/>
                        <span onClick={()=>setFlagged((prev)=>!prev)}>
                            <Flag flagged= {flagged}/>
                        </span>
                    </div>

                </section>
            </div>

            <div className='p-2 pt-5 border border-transparent border-t-1 border-t-gray-400'>
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
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
