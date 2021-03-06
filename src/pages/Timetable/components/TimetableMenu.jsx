import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState} from 'react'

import {BsThreeDotsVertical} from 'react-icons/bs'
import ManageTimetables from './ManageTimetables'



export default function TimetableMenu({}) {

 
  const [manageTimetableModal, setManageTimetableModal] = useState(false)

  return (
    
      <>
        <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full p-1 text-sm font-medium text-gray-600 hover:bg-green-200 bg-opacity-20  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <BsThreeDotsVertical className='text-lg'/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-green-100' : 'text-gray-900'
                    } group flex items-center w-full px-2 py-2 text-sm font-semibold`}
                    onClick = {()=>setManageTimetableModal(true)}
                  >
                    Manage Timetables
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {manageTimetableModal? <ManageTimetables isModal = {manageTimetableModal} setModal = {setManageTimetableModal}/>: null}
      
      </>
    
  )
}
