import { Menu, Transition, Dialog, } from '@headlessui/react'
import { Fragment, useState} from 'react'

import { useTimetableContext } from '../context'
import {AiOutlineTable} from 'react-icons/ai'

import {isEmptyObject} from '../../../helpers'

export default function SwitchTimetable({isModal, setModal}) {

    const {currentTimetable, setCurrentTimetable, timetables} = useTimetableContext()

    const changeTimetableHandler = (timetableName)=>{
        const timetablesIndex = timetables.findIndex((el)=> el.name === timetableName)
        setCurrentTimetable(timetables[timetablesIndex].timetable)
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
              <div  className="inline-block p-4 w-full max-w-md my-8 overflow text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <Dialog.Title
                  as="h2"
                  className="text-lg font-medium leading-6 text-gray-900 mb-5"
                >
                  Choose Timetable
            </Dialog.Title> 

                {isEmptyObject(timetables)?
                    <div>
                        <h1>There are no timetables!</h1>
                    </div>
                    :
                    <div>
                    <section className='flex flex-col'>
                        {
                            timetables.map((el)=>{
                                return <label
                                for={el.name} 
                                className='flex justify-between items-center mb-2 cursor-pointer hover:bg-green-50'>
                                    <span 
                                    
                                    className='flex items-center gap-3 text-sm'>
                                        <AiOutlineTable/>
                                        <p>{el.name}</p>
                                    </span>
                                    
                                    <input
                                    id ={el.name}
                                    className='outline-none' 
                                    type="checkbox" 
                                    onChange={()=>changeTimetableHandler(el.name)}
                                    />
                                </label>
                            })
                        }
                    </section>

                </div>
                }
              </div>

              
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
