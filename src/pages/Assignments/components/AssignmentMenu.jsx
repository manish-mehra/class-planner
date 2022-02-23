import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState} from 'react'

import {BsThreeDotsVertical} from 'react-icons/bs'

import { useAssignmentContext } from '../context'
import EditAssignment from './EditAssignment'



export default function AssignmentMenu({assignment}) {

  const {assignments, setAssignments} = useAssignmentContext()
  const [editModal, setEditModal] = useState(false)
  const [status, setStatus] = useState(assignment.status || false)
  const modalHandler = modalStatus=>{
    setEditModal(modalStatus)
  }

  const deleteAssignmentHandler = (e)=>{
    e.preventDefault()
    const newAssignments = assignments.filter((assg)=> assg.id !== assignment.id)
    setAssignments(newAssignments)
  }

  const markAsCompletedHandler = (e)=>{
    e.preventDefault()
    setStatus(prev=>!prev)
    const assignmentIndex = assignments.findIndex((el)=>el.id === assignment.id)
    let newAssignments = assignments
    newAssignments[assignmentIndex].status = true
    setAssignments(newAssignments.filter((el)=> el.status !== true))
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
                    onClick={markAsCompletedHandler}
                  >
                    Mark as Completed
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
                    onClick = {deleteAssignmentHandler}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {editModal? <EditAssignment assignment={assignment} editModal = {editModal} modalHandler = {modalHandler}/>: null}
      
      </>
    
  )
}
