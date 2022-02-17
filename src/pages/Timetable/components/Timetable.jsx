import React,{useState, useEffect} from 'react'

import TimetabelStructureData from './TimetableStructureData'
import { useTimetableContext } from '../context'
import { GrAdd } from 'react-icons/gr'

import AddPeriod from './AddPeriod'

import { selectColor } from '../../../helpers'

export default function Timetable() {

    const [timetableStruct, setTimetableStruct] = useState(TimetabelStructureData)
    const [addPeriodModal, setAddPeriodModal] = useState(false)
    const [selectedTime, setSelectedTime] = useState('')
    const [selectedDay, setSelectedDay] = useState('')

    const [timeTableSubject, setTimetableSubject] = useState({})

    const addTimetableSubjectHandler = (subj)=>{
        const timeIndex = timetableStruct.findIndex((el)=> el.time === selectedTime)
        const dayIndex = timetableStruct[timeIndex].weekday.findIndex((el)=> el.day === selectedDay)

        setTimetableStruct(()=>{
            let newTimeStruct = timetableStruct
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
                <section className='w-12 mb-4'>
                    
                </section>

                    <section className='flex'>
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => {
                            return (
                                <div
                                key={day.day}
                                className="w-28 mb-4"
                                >
                                <p className="">{day}</p>
                                </div>
                            )
                        })}
                    </section>
                </div>


            {
                timetableStruct.map((timetable)=>{
                    return (
                        <div 
                        className='flex gap-4'
                        key = {timetable.time}>
                            <section className='h-20 w-12 flex items-start'>
                                <p>{timetable.time}</p>
                            </section>

                            <section className='flex'>
                            {timetable.weekday.map((day) => {
                                    return (
                                        <div
                                        key={day.day}
                                        className={`relative h-20 w-28 border border-gray-200 cursor-pointer flex justify-center items-center hover:bg-green-50 group ${selectColor(day.subject.color)}`}
                                        onClick={()=>{
                                            setSelectedTime(()=>timetable.time)
                                            setSelectedDay(()=>day.day)
                                            setTimetableSubject(day.subject)
                                            setAddPeriodModal(true)
                                        }}
                                        >
                                        <GrAdd className='absolute top-1/2 z-10 opacity-0 hover:opacity-100 text-2xl'/>
                                        <p className='font-semibold text-gray-600'>{day.subject.name}</p>
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
