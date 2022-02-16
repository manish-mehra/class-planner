import React from 'react'
import { Link } from 'react-router-dom'

//import icons
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineViewAgenda} from 'react-icons/md'
import {MdOutlineAssignment} from 'react-icons/md'
import {BsPen} from 'react-icons/bs'
import {MdTaskAlt} from 'react-icons/md'
import {GiCalendar} from 'react-icons/gi'
import {AiOutlineBook} from 'react-icons/ai'
import {FaChalkboardTeacher} from 'react-icons/fa'

export default function index() {

  
  return (
    <div className='w-76 bg-green-200 border-r border-gray-200 p-4 fixed h-full overflow-hidden top-0 left-0'> 
      <div className="py-4 px-2">
        <a href="/">
          <p className='w-full h-9'>Logo</p>
        </a>
      </div>
    <div className="mb-6">
      <h3 className="mx-2 text-sm text-gray-600 font-bold uppercase tracking-widest mb-3">School Planner</h3>

      <Link to = "/" 
      className='flex items-center gap-2 px-2 py-2 text-gray-800 hover:bg-green-300 group font-semibold text-sm'>
        <AiOutlineHome/>
        Overview  
      </Link>
      <Link to = "/agenda" 
      className='flex items-center gap-2 px-2 py-2 text-gray-800 hover:bg-green-300 group font-semibold text-sm'>
        <MdOutlineViewAgenda/>
        Agenda
      </Link>
      <Link to = "/assignments" 
      className='flex items-center gap-2 px-2 py-2 text-gray-800 hover:bg-green-300 group font-semibold text-sm'>
        <MdOutlineAssignment/>
        Assignment 
      </Link>
      <Link to = "/exams" 
      className='flex items-center gap-2 px-2 py-2 text-gray-800 hover:bg-green-300 group font-semibold text-sm'>
        <BsPen/>
        Exams  
      </Link>
      <Link to = "/tasks" 
      className='flex items-center gap-2 px-2 py-2 text-gray-800 hover:bg-green-300 group font-semibold text-sm'>
        <MdTaskAlt/>
        Tasks  
      </Link>


    </div>

    <div className="mb-10">
    <h3 className="mx-2 text-sm text-gray-600 font-bold uppercase tracking-widest mb-3">Organize</h3>

      <Link to = "/timetable" 
      className='flex items-center gap-2 px-2 py-2 text-gray-800 hover:bg-green-300 group font-semibold text-sm'>
        <GiCalendar/>
        Timetable  
      </Link>

      <Link to = "/subjects" 
      className='flex items-center gap-2 px-2 py-2 text-gray-800 hover:bg-green-300 group font-semibold text-sm'>
        <AiOutlineBook/>
        Subjects  
      </Link>

      <Link to = "/teachers" 
      className='flex items-center gap-2 px-2 py-2 text-gray-800 hover:bg-green-300 group font-semibold text-sm'>
        <FaChalkboardTeacher/>
        Teachers
      </Link>
    </div>

  </div>
    )
}
