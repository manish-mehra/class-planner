
import {useState} from 'react'
import { useTaskContext } from '../context'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import {FiFilter} from 'react-icons/fi'


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }


export default function FilterTasks() {

  const [tasks, setTasks] = useState([])

  const allTaskHandler = ()=>{
    console.log('show all tasks')
  }

  const completedTasksHandler = ()=>{
    console.log('show completed Tasks')
  }

  const incompleteTasksHandler = ()=>{
    console.log('show incomplete tasks')
  }


  
 
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex justify-center w-full shadow-sm  bg-white text-sm font-medium text-gray-700 hover:bg-green-200 outline-none">
        <FiFilter className='text-lg'/>
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
      <Menu.Items className="origin-top-left -right-1 absolute  mt-2 w-64 rounded-md shadow-lg bg-white border border-gray-200 z-10">
        <div>

        <div>  
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`bg-white ${
                      active ? 'bg-green-100' : 'text-gray-900'
                    } group flex items-center w-full px-2 py-2 text-sm`}
                    onClick = {allTaskHandler}
                  >
                    All Tasks
                  </button>
                )}
              </Menu.Item>
        </div>
        <div>  
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`bg-white ${
                      active ? 'bg-green-100' : 'text-gray-900'
                    } group flex items-center w-full px-2 py-2 text-sm`}
                    onClick = {completedTasksHandler}
                  >
                    Show Completed Tasks
                  </button>
                )}
              </Menu.Item>
        </div>
        <div>  
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`bg-white ${
                      active ? 'bg-green-100' : 'text-gray-900'
                    } group flex items-center w-full px-2 py-2 text-sm`}
                    onClick = {incompleteTasksHandler}
                  >
                    Show Incomplete Tasks
                  </button>
                )}
              </Menu.Item>
        </div>

        </div>
      </Menu.Items>
    </Transition>
</Menu>
  )
}

