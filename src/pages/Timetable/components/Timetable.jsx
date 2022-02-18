import React,{useState} from 'react'

import { useTimetableContext } from '../context'
import AddPeriod from './AddPeriod'
import { selectColor } from '../../../helpers'

export default function Timetable() {


    const {currentTimetable, setCurrentTimetable} = useTimetableContext()
    const [addPeriodModal, setAddPeriodModal] = useState(false)
    const [selectedTime, setSelectedTime] = useState('')
    const [selectedDay, setSelectedDay] = useState('')

    const [timeTableSubject, setTimetableSubject] = useState({})

    const addTimetableSubjectHandler = (subj)=>{
        const timeIndex = currentTimetable.findIndex((el)=> el.time === selectedTime)
        const dayIndex = currentTimetable[timeIndex].weekday.findIndex((el)=> el.day === selectedDay)

        setCurrentTimetable(()=>{
            let newTimeStruct = currentTimetable
            newTimeStruct[timeIndex].weekday[dayIndex].subject = subj
            return newTimeStruct
        })
        setAddPeriodModal(false)


    }

  return (
    <div>
        {
            addPeriodModal?
                <AddPeriod 
                addTimetableSubject={addTimetableSubjectHandler} 
                timeTableSubject = {timeTableSubject}
                addPeriodModal = {addPeriodModal} 
                setAddPeriodModal = {setAddPeriodModal}/>
                :null
        }

        <div>

            <div className='flex gap-4'>
                <section className='w-14 mb-4'>
                {/*  empty space*/}
                </section>

                    <section className='flex'>
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => {
                            return (
                                <div
                                key={day.day}
                                className="w-28 mb-4"
                                >
                                <p className="text-sm font-semibold text-gray-600">{day}</p>
                                </div>
                            )
                        })}
                    </section>
                </div>


            {
                currentTimetable.map((timetable)=>{
                    return (
                        <div 
                        className='flex gap-1'
                        key = {timetable.time}>
                            <section className='h-10 w-12 flex items-start text-xs font-semibold'>
                                <p className='text-gray-600'>{timetable.time}</p>
                            </section>

                            <section className='flex'>
                            {timetable.weekday.map((day) => {
                                    return (
                                        <div
                                        key={day.day}
                                        className={`relative h-10 w-28 border drop-shadow-md border-gray-200 cursor-pointer flex justify-center items-center hover:bg-gray-50 group ${selectColor(day.subject.color)}`}
                                        onClick={()=>{
                                            setSelectedTime(()=>timetable.time)
                                            setSelectedDay(()=>day.day)
                                            setTimetableSubject(day.subject)
                                            setAddPeriodModal(true)
                                        }}
                                        >
                                        {/* <GrAdd className='absolute top-1/2 z-10 opacity-0 hover:opacity-100 text-2xl'/> */}
                                        <p className='font-semibold text-gray-600 text-sm'>{day.subject.name}</p>
                                        </div>
                                    )
                                })}
                            </section>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
