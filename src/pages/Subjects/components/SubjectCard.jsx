import React from 'react'

import SubjectMenu from './SubjectMenu'

export default function SubjectCard({subject}) {
    const {id, name, description} = subject
  return (
    <div className='flex justify-between items-start mt-3 border border-gray-200 p-3 rounded-md shadow-sm'>
        <section className='flex-col'>
            <p className='mb-2 text-sm font-semibold'>{name}</p>
            <p className='text-xs'>{description}</p>
        </section>

        <section>
            <SubjectMenu subject={subject}/>
        </section>
    </div>
  )
}
