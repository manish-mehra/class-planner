import { Menu, Transition } from '@headlessui/react'
import { Fragment} from 'react'

import { selectColor, isEmptyObject } from '../../../helpers'

import {GiGraduateCap} from 'react-icons/gi'

import { useTimetableContext } from '../context'

export default function Subjects({subject, pickSubject}) {

    const {subjects} = useTimetableContext()

return (
    <>
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="flex items-center gap-1 mb-2 w-full text-sm font-medium text-gray-600 bg-opacity-20  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        
        {isEmptyObject(subject)?
        <>
          <GiGraduateCap/>
          <p>Pick a subject</p>
        </>
        :
        <div className='flex items-center gap-1'>
          <div className={`w-3 h-3 ${selectColor(subject.color)}`}></div>
          <p>{subject.name}</p>
        </div>
      }
        
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
          {
              subjects.map((subject, index)=>
                <Menu.Item key = {index + subject}>
                    {({ active }) => (
                    <button
                        className={`${
                        active ? 'bg-green-100' : 'text-gray-900'
                        } group flex items-center gap-2 w-full px-2 py-2 text-sm`}
                        onClick = {()=>pickSubject(subject)}
                        
                        
                    >
                        <div className={`w-3 h-3 ${selectColor(subject.color)}`}></div>
                        <p>{subject.name}</p>
                    </button>
                    )}
                </Menu.Item>
              )
          }
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  
  </>
  )
}
