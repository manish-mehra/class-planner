import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef, useEffect} from 'react'

import { useTimetableContext } from '../context'
import Subjects from './Subjects'
import ColorPicker from './ColorPicker'


export default function AddPeriod({addPeriod, setAddPeriod}) {

    const [addExisting, setAddExisting] = useState(false)
    const [subject, setSubject] = useState({})
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState('')


    const addPeriodHandler = (e)=>{
        e.preventDefault()

        // close modal
        setAddPeriod(false)
    }

    const pickSubjectHandler = (sub)=>{
        setSubject(()=>sub)
        console.log(sub)
    }

    const pickColorHandler = (color)=>{
        setColor(color)
        console.log(color)
    }


  return (
    <>
      <Transition appear show={addPeriod} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={()=>setAddPeriod(false)}
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
                  Add Subject
                </Dialog.Title> 
                <div className='flex flex-col mt-3 bg-white'>         
                    <section className='flex flex-col mb-4'>
                            {
                                addExisting?
                                     <Subjects pickSubject = {pickSubjectHandler}/>
                                :
                                <div className='flex flex-col mb-4'>
                                    <input type="text"
                                    placeholder="Pick a subject"
                                    className='outline-none mb-2 text-sm font-semibold' 
                                    />
                                    <input type="text" 
                                    placeholder="Description"
                                    className='outline-none text-xs'
                                    />
                                    <ColorPicker pickColor={pickColorHandler}/>
                                </div>
                            }
                            <label htmlFor="addfromexistingsubject" className='flex items-center justify-between'>
                                
                                <p className='text-sm'>Add from existing subjects</p>
                                <input 
                                    type="checkbox" name="add existing"
                                    onChange={(e)=>{
                                        if(!e.target.checked){
                                            setAddExisting(false)
                                        }else{
                                            setAddExisting(true)
                                        }
                                    }}
                                    />
                            </label>
                    </section>
                </div>

                <div className="mt-4 flex gap-2">
                
                    <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-200 border border-transparent rounded-md hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={addPeriodHandler}
                    >
                        Add Subject
                    </button>

                    <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-200 border border-transparent rounded-md hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={()=>setAddPeriod(false)}
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
