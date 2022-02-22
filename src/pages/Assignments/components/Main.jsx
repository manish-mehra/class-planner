import React from 'react'

import { useAssignmentContext } from '../context'

import AssignmentCard from './AssignmentCard'

export default function Main() {

    const {assignments} = useAssignmentContext()
  return (
    <>
    <div className='mt-10 flex-col h-4/5'>

    <ul>
    {
                assignments?.map((assignment)=>
                    <li key={assignment.id}>
                        <AssignmentCard assignment = {assignment}/>
                    </li>
                )
            }
    </ul>

    </div>
    </>
  )
}
