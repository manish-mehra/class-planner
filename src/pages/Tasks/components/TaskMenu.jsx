import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState} from 'react'

import {BsThreeDotsVertical} from 'react-icons/bs'

import { useTaskContext } from '../context'
import EditTask from './EditTask'


export default function TaskMenu({task}) {

  const {tasks, setTasks} = useTaskContext()
  const [editModal, setEditModal] = useState(false)

  const modalHandler = modalStatus=>{
    setEditModal(modalStatus)
  }




  const deleteTaskHandler = (e)=>{
    e.preventDefault()
    const newTasks = tasks.filter((todo)=> todo.id !== task.id)
    setTasks(newTasks)
  }

  const flagTaskHandler = (e)=>{
    e.preventDefault()
    const flagged = task.flagged
    const newTask = {...task, flagged: !flagged}
    const newTasks = tasks.filter((todo)=> todo.id !== task.id)
    newTasks.push(newTask)
    setTasks(newTasks)
  }

  const markCompletedHandler = (e)=>{
    e.preventDefault()
    const status = task.status
    const newTask = {...task, status: !status}
    const newTasks = tasks.filter((todo)=> todo.id !== task.id)
    newTasks.push(newTask)

    //show only incomplete task
    setTasks(()=>
    newTasks.filter((task)=>task.status !== true)
   )
  }

  return (
    
      <>
        <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full p-1 text-sm font-medium text-white hover:bg-green-200 bg-opacity-20  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <BsThreeDotsVertical className='text-black'/>
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
                    } group flex items-center w-full px-2 py-2 text-sm`}
                    onClick = {markCompletedHandler}
                  >
                    Mark as completed
                  </button>
                )}
              </Menu.Item>
            </div>
            <div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-green-100' : 'text-gray-900'
                    } group flex items-center w-full px-2 py-2 text-sm`}
                    onClick = {flagTaskHandler}
                  >
                    
                    {task.flagged? 'Unflag': 'Flag'}
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-green-100' : 'text-gray-900'
                    } group flex items-center w-full px-2 py-2 text-sm`}
                    onClick={()=>modalHandler(true)}
                  >
                    Edit
                  </button>
                )}
              
                
              </Menu.Item>
            </div>
            <div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-green-100' : 'text-gray-900'
                    } group flex items-center w-full px-2 py-2 text-sm`}
                    onClick = {deleteTaskHandler}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
 
              
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {editModal? <EditTask task={task} editModal = {editModal} modalHandler = {modalHandler}/>: null}
      
      </>
    
  )
}
