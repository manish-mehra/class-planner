import React from 'react'

import { useExamContext } from '../context'

import ExamCard from './ExamCard'

export default function Main() {

    const {exams} = useExamContext()

  return (
    <>
    <div className='mt-10 flex-col h-4/5'>

    <ul>
    {
                exams?.map((exam)=> <li key={exam.id}>
                <ExamCard exam = {exam}/>
              </li> )
            }
    </ul>

    </div>
    </>
  )
}
