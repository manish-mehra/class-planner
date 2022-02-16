import React,{useState} from 'react'

import TimetabelStructureData from './TimetableStructureData'

export default function Timetable() {

    const [timetableStruct, setTimetableStruct] = useState(TimetabelStructureData)

  return (
    <div>

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
                                        className="h-20 w-28 border border-gray-400 cursor-pointer flex justify-center"
                                        onClick={()=>{
                                            console.log(timetable.time,day.day)
                                        }}
                                        >
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
