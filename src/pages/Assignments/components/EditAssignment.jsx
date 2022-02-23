import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState} from 'react'

import { useAssignmentContext } from '../context'
import PickSubject from './PickSubject'
import DatePickerButton from './DatePickerButton'

export default function EditAssignment({assignment, editModal, modalHandler}) {


    const {assignments, setAssignments} = useAssignmentContext()
    const [name, setName] = useState(assignment.name)
    const [description, setDescription] = useState(assignment.description)
    const [subject, setSubject] = useState(assignment.subject || {})
    const [date, setDate] = useState(assignment.date || new Date())

    const onDateChange = (d)=>{
      setDate(d)
    }


    const updateAssignmentHandler = (e)=>{
        e.preventDefault()

        const filteredAssignments = assignments.filter((assign)=> assign.id !== assignment.id)
        const updatedAssignment = {
            id: Math.random(),
            subject,
            date,
            name,
            description
        }
        filteredAssignments.push(updatedAssignment)

        setAssignments(filteredAssignments)

        setName('')
        setDescription('')
        // close modal
        modalHandler(false)
    }

    const pickSubjectHandler = (sub)=>{
      setSubject(()=>sub)
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
                  Edit Assignment
                </Dialog.Title> 
                <div className='flex flex-col mt-3 bg-white'>         
                    <section className='flex flex-col mb-4'>
                            <input type="text"
                                placeholder="e.g., English"
                                className='outline-none mb-2 text-sm font-semibold'
                                value = {name}
                                onChange = {(e)=>setName(e.target.value)}
                            />
                            <input type="text" 
                                placeholder="Description"
                                className='outline-none text-xs'
                                value = {description}
                                onChange = {(e)=>setDescription(e.target.value)}
                            />
                            <PickSubject subject={subject} pickSubjectHandler = {pickSubjectHandler}/>
                            <div className='flex'>
                              <DatePickerButton date = {date} onDateChange = {onDateChange}/>
                            </div>
                    </section>
                </div>

                <div className="mt-4 flex gap-2">
                
                    <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-200 border border-transparent rounded-md hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={updateAssignmentHandler}
                    >
                        Update Assignment
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
