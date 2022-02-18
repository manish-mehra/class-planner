import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef, useEffect} from 'react'
import { useTimetableContext } from '../context'
import TimetableStructureData from './TimetableStructureData'

export default function CreateTimetable({setModal, isModal}) {

    const {timetables, setTimetables} = useTimetableContext()

    const [timetableName, setTimetableName] = useState('')

    const createTimetableHandler = ()=>{
        let newTimetable = {
            name: timetableName,
            timetable: TimetableStructureData
        }
        setTimetables((prev)=> {
            return [...prev, newTimetable]
        })
        setModal(false)
    }
    

  return (
    <>
      <Transition appear show={isModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={()=>setModal(false)}
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
              <div  className="inline-block p-6 w-full max-w-md my-8 overflow text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">

              <Dialog.Title
                  as="h2"
                  className="text-lg font-medium leading-6 text-gray-900 mb-5"
                >
                  Add timetable
            </Dialog.Title> 

               <div className=''>
                <section className='flex flex-col mb-3'>
                    <p className='text-xs'>Title</p>
                    <input type="text" 
                    value={timetableName}
                    onChange = {(e)=> setTimetableName(e.target.value)}
                    className='outline-none border-b-2 border-gray-50'/>
                </section>

                <section className='flex justify-end gap-4 mb-1 text-sm'>
                    <button 
                    className='text-sm font-semibold p-1 border border-gray-400 rounded-sm hover:bg-green-200 cursor-pointer'
                    onClick={()=> setModal(false)}>Cancel</button>
                    <button
                    className='text-sm font-semibold p-1 border border-gray-400 rounded-sm hover:bg-green-200 cursor-pointer'
                    onClick={createTimetableHandler}
                    >Create</button>
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
