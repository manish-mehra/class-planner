import { Menu, Transition } from '@headlessui/react'
import { Fragment} from 'react'

import { selectColor } from '../../../helpers'

export default function ColorPicker({color, pickColor}) {

    
    const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'gray', 'pink', 'purple']
    
return (
    <>
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="flex items-center mb-1 gap-3 py-1 text-xs text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {color? <div  className={`w-3 h-3 ${selectColor(color)}`}></div>: null}
        <p>Pick a color</p>
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
      <Menu.Items className="absolute right-0 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
        <div>  
          {
              colors.map((color)=>
                <Menu.Item key = {color}>
                    {({ active }) => (
                    <button
                        className={`${
                        active ? 'bg-green-100' : 'text-gray-900'
                        } group flex items-center gap-2 w-full px-2 py-2 text-sm`}
                        onClick = {()=>pickColor(color)}
                    >
                        <div className={`w-3 h-3 ${selectColor(color)}`}></div>
                        <p>{color}</p>
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
