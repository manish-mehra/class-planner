import React,{useState} from 'react'

import TimetabelStructureData from './TimetableStructureData'
import { GrAdd } from 'react-icons/gr'

import AddPeriod from './AddPeriod'

export default function Timetable() {

    const [timetableStruct, setTimetableStruct] = useState(TimetabelStructureData)
    const [addPeriod, setAddPeriod] = useState(false)

  return (
    <div>
        {
            addPeriod?
                <AddPeriod addPeriod = {addPeriod} setAddPeriod = {setAddPeriod}/>
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
                                        className="relative h-20 w-28 border border-gray-200 cursor-pointer flex justify-center hover:bg-green-200 group"
                                        onClick={()=>{
                                            console.log(timetable.time,day.day)
                                            setAddPeriod(true)
                                        }}
                                        >
                                        <GrAdd className='absolute top-1/2 z-10 opacity-0 hover:opacity-100 text-2xl'/>
                                        <p>{day.subject.name}</p>
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
