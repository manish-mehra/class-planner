import React from 'react'

import { useSubjectContext } from '../context'

import SubjectCard from './SubjectCard'

export default function Main() {

    const {subjects, setSubjects} = useSubjectContext()

  return (
    <>
    <div className='mt-10 flex-col h-4/5'>

    <ul>
    {
                subjects?.map((subject)=>
                    <li key={subject.id}>
                        <SubjectCard subject = {subject}/>
                    </li>
                )
            }
    </ul>

    </div>
    </>
  )
}
