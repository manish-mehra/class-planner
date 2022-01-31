import React from 'react'
import { Link } from 'react-router-dom'

//import icons
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineViewAgenda} from 'react-icons/md'
import {MdOutlineAssignment} from 'react-icons/md'
import {BsPen} from 'react-icons/bs'
import {MdTaskAlt} from 'react-icons/md'


export default function index() {

  
  return (
    <div className='w-64 bg-green-200 border-r border-gray-200'> 
      <div className="py-4 px-6">
        <a href="/">
          <p className='w-full h-9'>Logo</p>
        </a>
      </div>
    <div className="mb-10">
      <h3 className="mx-6 text-xs text-gray-600 font-bold uppercase tracking-widest mb-3">School Planner</h3>

      <Link to = "/" 
      className='flex items-center gap-2 px-6 py-2.5 text-gray-800 hover:bg-green-300 group font-semibold'>
        <AiOutlineHome/>
        Overview  
      </Link>
      <Link to = "/agenda" 
      className='flex items-center gap-2 px-6 py-2.5 text-gray-800 hover:bg-green-300 group font-semibold'>
        <MdOutlineViewAgenda/>
        Agenda
      </Link>
      <Link to = "/assignments" 
      className='flex items-center gap-2 px-6 py-2.5 text-gray-800 hover:bg-green-300 group font-semibold'>
        <MdOutlineAssignment/>
        Assignment 
      </Link>
      <Link to = "/exams" 
      className='flex items-center gap-2 px-6 py-2.5 text-gray-800 hover:bg-green-300 group font-semibold'>
        <BsPen/>
        Exams  
      </Link>
      <Link to = "/tasks" 
      className='flex items-center gap-2 px-6 py-2.5 text-gray-800 hover:bg-green-300 group font-semibold'>
        <MdTaskAlt/>
        Tasks  
      </Link>


    </div>

    <div className="mb-10">
      <h3 className="mx-6 text-xs text-gray-400 uppercase tracking-widest">Organize
      </h3>


    </div>

    <div className="mb-10">
      <h3 className="mx-6 text-xs text-gray-400 uppercase tracking-widest">More</h3>
    </div>
  </div>
    )
}
