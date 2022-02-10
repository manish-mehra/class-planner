import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef, useEffect} from 'react'

import { useTaskContext } from '../context'

import Label from './Label'
import DatePickerButton from './DatePickerButton'
import Flag from './Flag'

export default function EditTask({task, editModal, modalHandler}) {


    const {tasks, setTasks} = useTaskContext()
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [date, setDate] = useState(new Date(task.date))
    const [label, setLabel] = useState(task.label)
    const [flagged,setFlagged] = useState(task.flagged)
    

    const updateTaskHandler = (e)=>{
        e.preventDefault()

        const filteredTasks = tasks.filter((todo)=> todo.id !== task.id)
        const updatedTask = {
            id: Math.random(),
            title,
            description,
            date,
            label,
            flagged,
            status: false
        }
        filteredTasks.push(updatedTask)

        setTasks(filteredTasks)

        setTitle('')
        setDescription('')
        setDate(new Date())
        setLabel([])
        setFlagged(false)

        // close modal
        modalHandler(false)
    }


    
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


  return (
    <>
      <Transition appear show={editModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={()=>modalHandler(false)}
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
              <div  className="inline-block w-full max-w-md p-6 my-8 overflow text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                <Dialog.Title
                  as="h2"
                  className="text-lg font-medium leading-6 text-gray-900 mb-5"
                >
                  Edit Task
                </Dialog.Title> 
                <div className='flex flex-col mt-3 bg-white'>
            
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
                </div>

                <div className="mt-4 flex gap-2">
                
                    <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-200 border border-transparent rounded-md hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={updateTaskHandler}
                    >
                        Update Task
                    </button>

                    <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-200 border border-transparent rounded-md hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={()=>modalHandler(false)}
                    >
                        Cancel
                    </button>
                </div>

              </div>  
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
